import {Instrument} from "./instrument.js"
import "./Keys.css"
import {useEffect, useState } from "react"

export const Keys = () =>  {
    
    const[keys, setKeys] = useState(() => { 
        const instrument = new Instrument("/sounds/church_organ");
        return instrument.getInstrumentKeys();
    })
    const [currentAudio, setCurrentAudio] = useState();

    const handleClick = (soundSrc) => {
        if (currentAudio) {
            currentAudio.pause();
        }
        const newAudio = new Audio(soundSrc);
        setCurrentAudio(newAudio)
        newAudio.play().then(() => console.log("Reproduciendo:", soundSrc)).catch(error => console.error(error));
    }

    const handleKeyDown = (event) => {
        const keyPressed = event.key.toLowerCase();
        const keyData = keys.find((tile) => tile.key.toLowerCase() === keyPressed)

        if(keyData) handleClick(keyData.src)

    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)

        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [keys])

    return (
        <div className="piano-container">
            {keys.map((tile) => {
               return ( <div
                key={tile.key}
                className={tile.type === "white" ? "white-key": "black-key"}
                style={tile.type === "black" ? {left: `${tile.position * 52}px`}: {}}
                onClick={() => handleClick(tile.src)}
                >
                {tile.key}
                </div>
               )
            })}     
        </div>
    )
}