import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [modalHistory, setModalHistory] = useState([]);

  const openModal = (modalName, song = null, songs = []) => {
    
    if (activeModal) {
      setModalHistory((prevHistory) => [
        ...prevHistory,
        { activeModal, selectedSong, selectedSongs },
      ]);
    }
    
    setActiveModal(modalName);
    setSelectedSong(song);
    setSelectedSongs(songs);
  };

  const goBackModal = () => {
    if (modalHistory.length > 0) {
      const previousState = modalHistory[modalHistory.length - 1];
      setActiveModal(previousState.activeModal);
      setSelectedSong(previousState.selectedSong);
      setSelectedSongs(previousState.selectedSongs);
      setModalHistory((prevHistory) => prevHistory.slice(0, -1));
    } else {
      closeModal();
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedSong(null);
    setSelectedSongs([]);
    setModalHistory([]);
  };

  return (
    <ModalContext.Provider value={{ activeModal, openModal, goBackModal, closeModal, selectedSongs, selectedSong }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);