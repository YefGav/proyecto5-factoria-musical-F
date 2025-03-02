import './RecordButtons.css'
import { useState, useContext } from 'react'
import { VolumeButton } from './volume_buttons/VolumeButton'
import { InstrumentContext } from '../../Piano'
import { useModal } from '../../../modals/ModalContext'

export const RecordButtons = () => {
  const { destination } = useContext(InstrumentContext)
  const [recording, setRecording] = useState(false)
  const [recorder, setRecord] = useState(null)
  const { requestTitle } = useModal()

  const startRecording = () => {
    if (!destination || recording) return

    const mediaRecorder = new MediaRecorder(destination.stream)
    let chunks = []

    mediaRecorder.onstart = () => setRecording(true)
    mediaRecorder.ondataavailable = (e) => chunks.push(e.data)

    mediaRecorder.onstop = async () => {
      setRecording(false)

      const requestHeader = new Headers()
      requestHeader.append('Content-Type', 'application/json')

      const blob = new Blob(chunks, { type: 'audio/webm' })
      const recordDuration = await getAudioDuration(blob)
      const blob64 = await blobToBase64(blob)
      const title = await requestTitle()

      fetch('http://localhost:8000/recording', {
        method: 'POST',
        headers: requestHeader,
        body: JSON.stringify({
          audioData: blob64,
          title: title,
          duration: recordDuration,
          pianoConfiguration: 'piano',
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error))
    }
    mediaRecorder.onpause = () => setRecording(false)
    mediaRecorder.onresume = () => setRecording(true)

    mediaRecorder.start()
    setRecord(mediaRecorder)
  }

  const stopRecording = () => {
    if (recorder && recording) recorder.stop()
  }

  const pauseRecording = () => {
    if (recorder && recording) recorder.pause()
  }

  const resumeRecording = () => {
    if (recorder && !recording) recorder.resume()
  }

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onloadend = () => {
        const base64data = reader.result.split(',')[1]
        resolve(base64data)
      }
      reader.onerror = (error) => reject(error)
    })
  }

  const getAudioDuration = (blob) => {
    return new Promise((resolve, reject) => {
      const audio = new Audio(URL.createObjectURL(blob))
      audio.onloadedmetadata = () => {
        resolve(audio.duration)
      }
      audio.onerror = reject
    })
  }

  return (
    <div className="record-buttons-container">
      <div className="volume-buttons">
        <VolumeButton action="increase" />
        <VolumeButton action="decrease" />
      </div>
      <button
        className="record-button"
        onClick={recording ? stopRecording : startRecording}
      >
        <img className="icon" src="/img/icons/rec.png" alt="" />
      </button>
      <button className="record-button" onClick={resumeRecording}>
      <img className="icon" src="/img/icons/play.png" alt="play icon" />

      </button>
      <button className="record-button" onClick={pauseRecording}>
      <img className="icon" src="/img/icons/pause.png" alt="pause icon" />

      </button>
    </div>
  )
}
