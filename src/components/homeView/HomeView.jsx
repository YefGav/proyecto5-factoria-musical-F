import "./HomeView.css";
import { ModalProvider } from "../modals/ModalContext";
import { ModalContainer } from './modal_container/ModalContainer';
import { Menu } from "../menu/Menu";
import { Piano } from "../piano/Piano";

export const HomeView = () => {

    return (
        <>
        <ModalProvider>
        <div className='sup-container'>
            <Menu />
            <ModalContainer />
        </div>
            <Piano />  
        </ModalProvider>
        </>
    )
};

