import './Recordings.css'
import { useModal } from '../ModalContext'
import { useEffect, useState } from 'react'

export const Recordings = ({ isOpen }) => {
  const { openModal } = useModal()
  const [recordings, setRecordings] = useState([])
  const [currentRecording, setCurrentRecording] = useState(null)
  const [isPlaying, setIsplaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    if (isOpen) {
      fetch('http://localhost:8000/recording', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((data) => {
          const convertedAudioData = data.map((rec) => ({
            ...rec,
            audioData: base64toBlob(rec.audioData, 'audio/webm'),
          }))
          setRecordings(convertedAudioData)
        })
        .catch((error) => console.error(error))
    }
  }, [isOpen])

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/recording/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => setRecordings((prev) => prev.filter((rec) => rec.id !== id)))
      .catch((error) => console.error(error))
  }
  const base64toBlob = (audioData, mimeType) => {
    const byteCharacters = atob(audioData)
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    return new Blob([byteArray], { type: mimeType })
  }

  const handlePlay = (audioUrl) => {
    if (currentRecording) {
      if (isPlaying) return

      currentRecording.play()
      setIsplaying(true)
    } else {
      const audio = new Audio(audioUrl)
      setCurrentRecording(audio)
      audio.play()
      setIsplaying(true)
      audio.ontimeupdate = () => {
        setCurrentTime(audio.currentTime)
      }
      audio.onended = () => {
        setCurrentRecording(null)
      }
    }
  }

  const handlePause = () => {
    if (currentRecording && isPlaying) {
      currentRecording.pause()
      setIsplaying(false)
    }
  }

  const handleSop = () => {
    if (currentRecording) {
      currentRecording.pause()
      setCurrentRecording(null)
      setIsplaying(false)
    }
  }

  return (
    <div className="recordings">
      <button className="close-button" onClick={() => openModal("welcome")}>
        <img
          className="close-img"
          src="/img/icons/close_icon.png"
          alt="close icon"
        />
      </button>
      <h1>GRABACIONES</h1>
      <div className="recordings-list">
        {recordings.length === 0 ? (
          <p>No hay grabaciones disponibles</p>
        ) : (
          recordings.map((r, index) => {
            const audioUrl = URL.createObjectURL(r.audioData)
            return (
              <div className="record" key={index} id={r.id}>
                <div className="icons">
                  <button
                    className="icon-btn"
                    onClick={() => handlePlay(audioUrl)}
                  >
                    <img
                      className="img-play"
                      src="/img/icons/play_icon.png"
                      alt="play"
                    />
                  </button>
                  <button className="icon-btn" onClick={() => handlePause()}>
                    <img
                      className="img-btn"
                      src="/img/icons/pause_icon.png"
                      alt="pause"
                    />
                  </button>
                  <button className="icon-btn" onClick={() => handleSop()}>
                    <img
                      className="img-btn"
                      src="/img/icons/stop_icon.png"
                      alt="stop"
                    />
                  </button>
                </div>
                <p>{r.title}</p>
                <p>{r.pianoConfiguration.charAt(0).toUpperCase() + r.pianoConfiguration.slice(1).toLowerCase()}</p>
                <p>{r.recordingDate}</p>
                <p>{r.duration}</p>
                <button className="icon-btn">
                  <img
                    className="img-delete"
                    src="/img/icons/delete_icon.png"
                    alt="delete"
                    onClick={() => handleDelete(r.id)}
                  />
                </button>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}