import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import './imageNotes.scss'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'
import NoteModal from '../Modal/NoteModal/NoteModal'
import { InteractiveImage, NotesPanel } from '../../components'

import { setNotePosition, resetNote } from '../../redux/actions/noteAction'
import {
  addNewNote,
  selectNote,
  editNote,
  deleteNote,
} from '../../redux/actions/notesAction'

const ImageNotes = ({
  note,
  notes,
  setNotePosition,
  resetNote,
  addNewNote,
  selectNote,
  deleteNote,
  editNote,
}) => {
  const [modalInfo, setModalInfo] = useState({
    noteId: 0,
    type: 'create',
    active: false,
  })
  const [isOpenModal, setOpenModal] = useState(false)

  useEffect(() => {
    console.log(modalInfo)
    if (modalInfo.active) {
      setOpenModal(true)
    } else {
      setOpenModal(false)
    }
  }, [modalInfo])

  const closeNoteModal = () => {
    resetNote()
    setModalInfo({
      noteId: 0,
      type: 'create',
      active: false,
    })
  }

  const handleSaveNote = () => {
    setOpenModal(false)
    if (!notes.notes.some((item) => item.noteText === note.noteText)) {
      if (modalInfo.type === 'create') {
        addNewNote(note)
      } else {
        editNote(modalInfo.noteId, note.noteText)
      }
    }
    closeNoteModal()
  }

  const handleCancel = () => {
    setOpenModal(false)
    closeNoteModal()
  }

  return (
    <div className="app-container">
      <Header />

      <main className="main-section">
        <div className="wrapper">
          <div className="work-area">
            <NotesPanel
              notesList={notes.notes}
              selectNote={selectNote}
              selectedId={notes.activeNoteId}
              deleteNote={() => deleteNote(notes.activeNoteId)}
              editNote={(text) => editNote(notes.activeNoteId, text)}
              setModalInfo={setModalInfo}
            />

            <InteractiveImage
              image={notes.currentImage}
              notesList={notes.notes}
              setPosition={setNotePosition}
              setModalInfo={setModalInfo}
              selectNote={selectNote}
            />
          </div>
        </div>
      </main>
      {isOpenModal && (
        <Modal>
          <NoteModal
            modalType={modalInfo.type}
            noteId={modalInfo.noteId}
            onSubmit={handleSaveNote}
            onCancel={handleCancel}
          />
        </Modal>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  note: state.note,
  notes: state.notes,
})

const mapDispatchToProps = (dispatch) => {
  return {
    setNotePosition: (relX, relY) => dispatch(setNotePosition(relX, relY)),
    resetNote: () => dispatch(resetNote()),
    addNewNote: (note) => dispatch(addNewNote(note)),
    selectNote: (id) => dispatch(selectNote(id)),
    deleteNote: (id) => dispatch(deleteNote(id)),
    editNote: (id, text) => dispatch(editNote(id, text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageNotes)
