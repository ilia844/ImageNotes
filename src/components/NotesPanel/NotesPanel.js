import React from 'react'
import { Switch, Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import './notesPanel.scss'
import { NoteItem } from '../NoteItem'

export const NotesPanel = ({
  notesList,
  selectNote,
  deleteNote,
  editNote,
  setModalInfo,
  selectedId,
}) => {
  const renderNotes = (notes) => {
    return notes.map((note) => (
      <NoteItem
        key={note.id}
        noteText={note.noteText}
        isActive={note.isActive}
        setActive={() => selectNote(note.id)}
      />
    ))
  }

  return (
    <div className="notes-panel">
      <div className="notes-panel__header">
        <Switch
          className="toggle"
          checkedChildren="All"
          unCheckedChildren="Latest"
          defaultChecked
        />

        <div className="toolbar">
          <Button
            className="toolbar-item"
            shape="circle"
            size={'small'}
            icon={<EditOutlined />}
            onClick={() =>
              setModalInfo({
                noteId: selectedId,
                type: 'edit',
                active: true,
              })
            }
          />

          <Button
            className="toolbar-item"
            shape="circle"
            size={'small'}
            icon={<DeleteOutlined />}
            onClick={deleteNote}
          />
        </div>
      </div>
      <ul className="notes-list">{renderNotes(notesList)}</ul>
    </div>
  )
}
