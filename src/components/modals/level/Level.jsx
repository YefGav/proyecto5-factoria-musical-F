import './Level.css';
import { LevelButton } from './levelButtons/LevelButton';
import { useModal } from '../ModalContext';

export const Level = () => {

    const {setActiveModal} = useModal();

    const easySongs = [
        {id: 1, imgSrc: "/img/songs/estrellita-caratula.jpg", title: "Estrellita donde estás", scoreSrc:"/img/songs/estrellita.WEBP"},
        {id: 2, imgSrc: "/img/songs/himno-de-la-alegria-caratula.jpg", title: "Himno de la alegría", scoreSrc:"/img/songs/himno-de-la-alegria.JPG"},
        {id: 3, imgSrc: "/img/songs/over-the-rainbow-caratula.jpg", title: "Somewhere over the Rainbow", scoreSrc:"/img/songs/over-the-rainbow.JPG"},
        {id: 4, imgSrc: "/img/songs/elefante-caratula.jpeg", title: "Un elefante se balanceaba", scoreSrc:"/img/songs/elefante.PNG"},
        {id: 5, imgSrc: "/img/songs/pokemon-caratula.webp", title: "Crea tu canción", scoreSrc:"/img/songs/"},
    ];

    const mediumSongs = [
        {id: 1, imgSrc: "/img/songs/bella-ciao-caratula.jpg", title: "Bella Ciao", scoreSrc:"/img/songs/bella-ciao.JPG"},
        {id: 2, imgSrc: "/img/songs/chicos-coro-caratula.jpg", title: "Los chicos del coro", scoreSrc:"/img/songs/chicos-coro.JPG"},
        {id: 3, imgSrc: "/img/songs/simpsons-caratula.jpg", title: "Los Simpsons", scoreSrc:"/img/songs/simpsons.JPG"},
        {id: 4, imgSrc: "/img/songs/lilium-caratula.jpg", title: "Lilium", scoreSrc:"/img/songs/lilium.JPG"},
        {id: 5, imgSrc: "/img/songs/pokemon-caratula.webp", title: "Crea tu canción", scoreSrc:"/img/songs/"},
    ];

    const hardSongs = [
        {id: 1, imgSrc: "/img/songs/pokemon-caratula.webp", title: "Pokémon", scoreSrc:"/img/songs/pokemon.JPG"},
        {id: 2, imgSrc: "/img/songs/married-life-caratula.jpg", title: "Married life", scoreSrc:"/img/songs/married-life.PNG"},
        {id: 3, imgSrc: "/img/songs/juego-de-tronos-caratula.jpg", title: "Juego de tronos", scoreSrc:"/img/songs/juego-de-tronos.WEBP"},
        {id: 4, imgSrc: "/img/songs/wrecking-ball-caratula.jpg", title: "Wrecking Ball", scoreSrc:"/img/songs/wrecking-ball.JPG"},
        {id: 5, imgSrc: "/img/songs/lilium-caratula.jpg", title: "Crea tu canción", scoreSrc:"/img/songs/"},
    ];

    return (
        <div className='level-modal'>
            <button className="back-arrow" onClick={() => setActiveModal("welcome")}>
                <img className="back-arrow-img" src='/img/icons/back-arrow.png' alt='Back Arrow' />
            </button>
            <h1>Por favor, seleccione un nivel</h1>
            <div className="buttons">
                <LevelButton songs={easySongs} text="FÁCIL" />
                <LevelButton songs={mediumSongs} text="MEDIO" />
                <LevelButton songs={hardSongs} text="DIFÍCIL" />
            </div>
        </div>
    )
}