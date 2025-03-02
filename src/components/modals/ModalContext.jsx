import { createContext, useState, useContext, useRef } from 'react'
import PropTypes from 'prop-types'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState('welcome')
  const [selectedSongs, setSelectedSongs] = useState([])
  const [selectedSong, setSelectedSong] = useState(null)
  const [modalHistory, setModalHistory] = useState([])
  const titlePromiseRef = useRef(null)

  const openModal = (modalName, song = null, songs = []) => {
    if (activeModal) {
      setModalHistory((prevHistory) => [
        ...prevHistory,
        { activeModal, selectedSong, selectedSongs },
      ])
    }

    setActiveModal(modalName)
    setSelectedSong(song)
    setSelectedSongs(songs)
  }

  const goBackModal = () => {
    if (modalHistory.length > 0) {
      const previousState = modalHistory[modalHistory.length - 1]
      setActiveModal(previousState.activeModal)
      setSelectedSong(previousState.selectedSong)
      setSelectedSongs(previousState.selectedSongs)
      setModalHistory((prevHistory) => prevHistory.slice(0, -1))
    } else {
      closeModal()
    }
  }

  const closeModal = () => {
    setActiveModal(null)
    setSelectedSong(null)
    setSelectedSongs([])
    setModalHistory([])
  }

  const requestTitle = () => {
    return new Promise((resolve) => {
      titlePromiseRef.current = resolve
      setActiveModal('endRecording')
    })
  }

  const submitTitle = (title) => {
    if (titlePromiseRef.current) {
      titlePromiseRef.current(title)
      titlePromiseRef.current = null
      closeModal()
    }
  }

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        openModal,
        goBackModal,
        closeModal,
        selectedSongs,
        selectedSong,
        requestTitle,
        submitTitle,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalProvider
export const useModal = () => useContext(ModalContext)
