import "./Keys.css"
import { useContext, useEffect } from "react";
import {InstrumentContext} from "../Piano"
export const Keys = () =>  {
    
    const {instrument, volume} = useContext(InstrumentContext)

    useEffect(() => {

        const handleKeyDown = (event) => {

            const keyPressed = event.key.toLowerCase();
            const keyData = instrument.find((tile) => tile.key.toLowerCase() === keyPressed)
            
    
            if(!keyData.sound.ended){
                const newSound = new Audio(keyData.src);
                newSound.volume = volume;
                newSound.play().then(() => console.log("Reproduciendo:", keyData.sound)).catch(error => console.error(error))
            } else {
                keyData.sound.volume = volume;
                keyData.sound.play().then(() => console.log("Reproduciendo:", keyData.sound)).catch(error => console.error(error));
            }
    
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => window.removeEventListener("keydown", handleKeyDown)

    }, [instrument, volume])



    const handleClick = (sound) => {

        sound.volume = volume;

        if(!sound.ended){
            const newSound = new Audio(sound.src);
            newSound.volume = volume;
            newSound.play().then(() => console.log("Reproduciendo:", newSound)).catch(error => console.error(error))
        } else {
            sound.play().then(() => console.log("Reproduciendo:", sound)).catch(error => console.error(error));
        }

    }

    return (
        <div className="piano-container">
            {instrument.map((tile) => {
               return ( 
               <div
                key={tile.key}
                className={tile.type === "white" ? "white-key": "black-key"}
                style={tile.type === "black" ? {left: `${tile.position * 52}px`}: {}}
                onClick={() => handleClick(tile.sound, tile.src)}
                >
                {tile.key}
                </div>
               )
            })}     
        </div>
    )
}