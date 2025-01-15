import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import CreateTask from "@/Components/CreateTask";
import EditTask from "@/Components/EditTask";
import { useAuth } from "./AuthContext";

interface ModalContextType {
    openModal: (type: 'create' | 'edit', taskId?:string) => void;
    closeModal: () => void;
    isModalOpen: boolean;
}

interface ModalContentProps {
    type: 'create' | 'edit' | '';
    closeModal: () => void;
    taskId: string | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalContent = ({ type, closeModal, taskId }:ModalContentProps) => {
    const ele = type === "create" ? <CreateTask closeModal={closeModal} /> : <EditTask closeModal={closeModal} taskId={taskId}/>;
    return createPortal(ele,
      document.getElementById("modal") as HTMLElement 
    );
};

type ModalProviderProps = {
    children: React.ReactNode;
}

export const ModalProvider = ({children}:ModalProviderProps) => {
    const [modalType, setModalType] = useState<'create' | 'edit' | ''>("");
    const [taskId, setTaskId] = useState<string|null>(null);
    const {isModalOpen, closeModal, setIsModalOpen} = useAuth();

    const openModal = (type : 'create' | 'edit', taskId?: string) => {
        setTaskId(taskId || null);
        setModalType(type);
        setIsModalOpen(true);
      };
    
    

    return(
        <ModalContext.Provider value={{openModal, closeModal, isModalOpen}}>
            {children}
            {isModalOpen && <ModalContent type={modalType} closeModal={closeModal} taskId={taskId}/>}
        </ModalContext.Provider>
    );
}

export const useModal = ():ModalContextType => {
    const context = useContext(ModalContext);

    if(!context) throw new Error("Error");

    return context;
};
