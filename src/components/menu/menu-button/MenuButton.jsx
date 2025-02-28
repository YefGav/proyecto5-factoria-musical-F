import "./MenuButton.css";
import { useModal } from "../../modals/ModalContext"; 


export const MenuButton = ({action, text}) => {

    const { openModal } = useModal();

    return (
        <button className="menu-btn" onClick={() => openModal(action)}>
            {text}
        </button>
    )
}