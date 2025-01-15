'use client';
import BoardView from "@/Components/BoardView";
import ListView from "@/Components/ListView";
import PriNav from "@/Components/PriNav";
import SecNav from "@/Components/SecNav";
import TaskBar from "@/Components/TaskBar";
import TaskContainer from "@/Components/TaskContainer";
import { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ModalProvider } from "@/context/ModalContext";
import { TasksProvider } from "@/context/TasksContext";

const TaskPageCnts = () => {
    const {userLoggedIn} = useAuth();
    const router = useRouter();

    const [isListView, setIsListView] = useState(true);

    const toggleView = (prevState:boolean) => setIsListView(prevState);

    useEffect(()=> {
        const handleResize = () => (window.innerWidth < 768) && setIsListView(true);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    },[]);

    useEffect(()=>{        
        if(!userLoggedIn){
            router.push("/");
        }
    }, [userLoggedIn])

    return (
        <>
        {

           userLoggedIn && <div className="w-full max-w-7xl min-w-80 p-0.5 rounded-md sm:rounded-xl shadow-lg">
                <div className="root w-full h-full rounded-md sm:rounded-xl overflow-hidden text-slate-800 max-h-[90vh] bg-white">
                    <PriNav />
                    <div className="px-5 py-2.5 flex md:flex-col gap-3">
                        <SecNav isListView={isListView} toggleView={toggleView}/>
                        <TaskBar/>
                    </div>
                    <TaskContainer>
                        {isListView ? <ListView /> : <BoardView/>}
                    </TaskContainer>
                </div>
            </div>
        }
        </>
    )
}

const Page = () => {
    return (
        <AuthProvider>
            <TasksProvider>
                <ModalProvider>
                    <TaskPageCnts/>
                </ModalProvider>
            </TasksProvider>
        </AuthProvider>
    )
}

export default Page;