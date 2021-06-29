import React, { useEffect, useRef, useState } from 'react'

import './interactiveImage.scss'
import { Marker } from '../Marker'

export const InteractiveImage = ({
  image,
  notesList,
  setPosition,
  // openModal,
  setModalInfo,
  selectNote,
}) => {
  const [isResized, setResized] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    window.addEventListener('resize', () => setResized((prev) => !prev))

    return () => {
      window.removeEventListener('resize', () => setResized((prev) => !prev))
    }
  }, [])

  const renderTags = (notes) => {
    return notes.map((note) => {
      const left =
        Math.round(imageRef.current.offsetWidth / note.relativeX) - 15
      const top =
        Math.round(imageRef.current.offsetHeight / note.relativeY) - 30

      return (
        <Marker
          key={note.id}
          left={left}
          top={top}
          isActive={note.isActive}
          setActive={() => selectNote(note.id)}
        />
      )
    })
  }

  const handleClick = (e) => {
    const imageWidth = e.target.clientWidth
    const imageHeight = e.target.clientHeight
    const left = e.nativeEvent.offsetX
    const top = e.nativeEvent.offsetY

    const relativeX = imageWidth / left
    const relativeY = imageHeight / top

    setPosition(relativeX, relativeY)
    setModalInfo({
      noteId: 0,
      type: 'create',
      active: true,
    })
    // openModal(true)
  }

  return (
    <div className="image-area">
      <img
        ref={imageRef}
        className="interactive-image"
        onClick={handleClick}
        src={image}
        alt="PicturePicturePicture"
      />
      {renderTags(notesList)}
    </div>
  )
}
