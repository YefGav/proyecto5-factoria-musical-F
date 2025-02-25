import "./Keys.css"
import {useEffect, useState, useContext } from "react"
import { InstrumentContext } from "../Piano.jsx";

export const Keys = () =>  {
    const {instrument} = useContext(InstrumentContext);
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
        const keyData = instrument.find((tile) => tile.key.toLowerCase() === keyPressed)

        if(keyData) handleClick(keyData.src)

    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)

        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [instrument])

    return (
        <div className="piano-container">
            {instrument.map((tile) => {
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