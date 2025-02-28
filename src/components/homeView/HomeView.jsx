import "./HomeView.css";
import { Menu } from "../menu/Menu";
import { Piano } from "../piano/Piano";

export const HomeView = () => {

    return ( 
        <div className="container">
            <div className="container-superior">
                <Menu />
            </div>
                <Piano />
        </div>
    );
};

