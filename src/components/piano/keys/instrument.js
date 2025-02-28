export class Instrument {
/** 
 *Genera un conjunto de teclas con el src ajustado según el instrumento
 *@param {string} directory - Nombre del directorio ("piano", "church_organ", "electric_piano")
 *@param {string} [extension="mp3"] - Extensión del archivo de sonido, por defecto, .mp3 
*/
    constructor(directory = "/sounds/piano", extension = "mp3") {
        this.directory = directory;
        this.extension = extension;
        this.instrumentKeys = this.#createInstrumentKeys();
    }


    #createInstrumentKeys(){
        const keys = ["Q", "2", "W", "3", "E", "R", "5", "T", "6", "Y", "7", "U", 
                      "Z", "S", "X", "D", "C", "V", "G", "B", "H", "N", "J", "M"];

        const blackKeys = ["2", "3", "5", "6", "7", "S", "D", "G", "H", "J"];
        const blackPositions = [1, 2, 4, 5, 6, 8, 9, 11, 12, 13];

        const baseKeys = keys.map((key) => {
            const isBlack = blackKeys.includes(key);
            return {
                key,
                type: isBlack ? "black" : "white", 
                ...(isBlack && { position: blackPositions[blackKeys.indexOf(key)]})
            };
        });
            return baseKeys.map(item => ({
                ...item, 
                sound: new Audio(`${this.directory}/${item.key.toLowerCase()}.${this.extension}`),
                src: `${this.directory}/${item.key.toLowerCase()}.${this.extension}` 
            }
        ))
    
    }

    getInstrumentKeys(){
        return this.instrumentKeys;
    }

    /**
     * Permite personalizar las teclas del instrumento
     * Si se pasa un array vacío, devuelve un error
     * @param {Array<{key: string, type: "white" | "black", position: number, src: string}>} instrumentKeys - Array con objetos personalizados
     */

    setInstrumentKeys(instrumentKeys){
        if(!Array.isArray(instrumentKeys)) {
            throw new Error("El parámetro debe ser un array.")
        }

        if (instrumentKeys.length === 0) {
            throw new Error("El array no puede estar vacío.")
        }

        for(let i = 0; i < instrumentKeys.length; i++){
            if(typeof instrumentKeys[i] !== 'object' || instrumentKeys[i] === null || Array.isArray(instrumentKeys[i]))
                throw new Error(`El elemento en la posición ${i} no es un objeto válido.`);
        }
        
        this.instrumentKeys = instrumentKeys
    }
}

