import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { Button } from '../../../components'
import './noteModal.scss'

import { changeNoteValue } from '../../../redux/actions/noteAction'

const NoteModal = ({
  note,
  notes,
  changeNoteValue,
  onSubmit,
  onCancel,
  modalType,
  noteId,
}) => {
  useEffect(() => {
    console.log('modalType: ', modalType)
    if (modalType === 'create') {
    } else {
      console.log(notes.notes.find((note) => note.id === noteId))
      changeNoteValue(notes.notes.find((note) => note.id === noteId).noteText)
    }
  }, [modalType])

  const onChangeHandle = (e) => {
    const { value, maxLength } = e.target
    const noteText = value.slice(0, maxLength)
    changeNoteValue(noteText)
  }

  const handleSubmit = () => {
    note.noteText.trim() ? onSubmit() : onCancel()
  }

  const handleCancel = () => {
    onCancel()
  }

  return (
    <div className="modal-window">
      <div className="modal-header">
        <div className="modal-title">
          {modalType === 'create' ? 'Create Note' : 'Edit Note'}
        </div>
      </div>

      <div className="modal-body">
        <textarea
          className="modal-textarea"
          autoFocus={true}
          onChange={onChangeHandle}
          value={note.noteText}
          maxLength={500}
        />
      </div>

      <div className="modal-footer">
        <Button className="modal-btn" onClick={handleCancel} invert>
          Cancel
        </Button>
        <Button className="modal-btn" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  note: state.note,
  notes: state.notes,
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeNoteValue: (value) => dispatch(changeNoteValue(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteModal)
