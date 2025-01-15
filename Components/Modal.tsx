import { useModal } from "@/context/ModalContext";

interface ModalProps {
    children: React.ReactNode;
}

const Modal = ({children}:ModalProps) => {
    const {closeModal} = useModal();

    return (
        <div className="fixed inset-0 w-full h-full bg-slate-500/30 z-[3] flex items-end sm:items-center justify-center" onClick={closeModal}>
            {children}
        </div>
    );
}

export default Modal;