import React from 'react'

import './noteItem.scss'

export const NoteItem = ({ noteText, setActive, isActive }) => {
  return (
    <li
      className={`notes-list__item ${
        isActive ? 'notes-list__item_active' : ''
      }`}
      onClick={setActive}
    >
      {noteText}
    </li>
  )
}
