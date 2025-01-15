import { useState, useEffect, createContext, useContext } from "react";
import { app, auth } from "../firebase/firebase";
import { onAuthStateChanged, signInWithPopup, signOut, User, GoogleAuthProvider } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";

interface CustomUser extends User {
    user_id?: string;
}

interface AuthContextValue {
    currentUser: CustomUser | null;
    userLoggedIn: boolean;
    loading: boolean;
    googleSignIn: () => void;
    logOut: () => void;
    isModalOpen: boolean;
    setIsModalOpen : React.Dispatch<React.SetStateAction<boolean>>;
    closeModal: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("Error");
    }

    return context;
}

interface AuthProviderProps {
    children : React.ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        if (userLoggedIn && pathName !== "/tasks") {
            router.push("/tasks");
        }
    }, [userLoggedIn, pathName, router]);

    const initializeUser = async (user: User | null) => {
        if(user){
            setCurrentUser(user);
            setUserLoggedIn(true);

            try{
                const result = await axios.post("/api/users", {
                    name: user.displayName,
                    email: user.email,
                    profileImage: user.photoURL,
                    lastLoggedIn: new Date(),
                    lastLoggedOut: null,
                });
                const {_id} = result.data.user;

                setCurrentUser((prevState) => {
                    if (prevState) {
                        return { ...prevState, user_id: _id };
                    }
                    return { ...user, user_id: _id };
                });
            }
            catch(error){
                console.log("Error", error);
            }
        }
        else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    } 

    const googleSignIn = async() => {
        const provider = new GoogleAuthProvider();

        try{
            const result = await signInWithPopup(auth, provider);
            setCurrentUser(result.user);
            setUserLoggedIn(true);
        }
        catch(error){
            console.log("Error during Google Sign-in", error);
        }
    }

    const logOut = async() => {
        if(currentUser){
            try{
                await axios.post("/api/users", {
                    email: currentUser.email,
                    lastLoggedIn: currentUser.metadata.lastSignInTime,
                    lastLoggedOut: new Date()
                });

                await signOut(auth);
                setUserLoggedIn(false);
                setCurrentUser(null);
                router.push("/");
            }
            catch(error){
                console.log('Error in logging out', error);
            }
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return () => unsubscribe();
    }, []);

    const value:AuthContextValue = {
        currentUser,
        userLoggedIn,
        loading,
        googleSignIn,
        logOut,
        isModalOpen,
        setIsModalOpen,
        closeModal
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

