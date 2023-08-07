import { ReactNode } from "react";
import StyledModal from "./styles";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
    title: string;
    onClose: () => void;
    $modalWidth?: string;
    children: ReactNode;
}
export default function Modal({ title, onClose, $modalWidth, children }: ModalProps) {
    return (
        <StyledModal $modalWidth={$modalWidth}>
            <div>
                <header>
                    <h2>{title}</h2>
                    <button onClick={onClose} >
                        <IoMdClose />
                    </button>
                </header>
                <div>
                    {children}
                </div>
            </div>
        </StyledModal>
    );
}