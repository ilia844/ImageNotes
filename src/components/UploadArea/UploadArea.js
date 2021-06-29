import React from 'react'
import { useDropzone } from 'react-dropzone'

import './uploadArea.scss'

export const UploadArea = ({ loadNewImage }) => {
  const onDrop = (acceptedFiles) => {
    const newImage = Object.assign(acceptedFiles[0], {
      preview: URL.createObjectURL(acceptedFiles[0]),
    })

    console.log(newImage)
    loadNewImage(URL.createObjectURL(acceptedFiles[0]))
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1,
  })

  return (
    <div {...getRootProps()} className="upload-area">
      <input {...getInputProps()} className="upload-area__input" />
      <p className="upload-area__placeholder">
        Drop your file <br />
        or click to browse it
      </p>
    </div>
  )
}
