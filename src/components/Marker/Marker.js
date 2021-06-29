import React from 'react'

import './marker.scss'
import markerImg from '../../assets/img/marker.png'
import markerActiveImg from '../../assets/img/marker_active.png'

export const Marker = ({ left, top, isActive, setActive }) => {
  const marker = isActive ? markerActiveImg : markerImg

  return (
    <img
      className="tag-label"
      style={{ left, top }}
      src={marker}
      alt="Marker"
      onClick={setActive}
    />
  )
}
