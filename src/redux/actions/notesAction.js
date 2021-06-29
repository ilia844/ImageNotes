import { getHashCode } from '../../assets/js/utils'

export const ADD_NEW_NOTE = 'ADD_NEW_NOTE'
export const SELECT_NOTE = 'SELECT_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'
export const ADD_NEW_IMAGE = 'ADD_NEW_IMAGE'

const prepareNote = (note) => {
  return {
    id: getHashCode(note.noteText),
    noteText: note.noteText.trim(),
    relativeX: note.relativeX,
    relativeY: note.relativeY,
    isActive: true,
  }
}

export const addNewImage = (image) => ({
  type: ADD_NEW_IMAGE,
  image,
})

export const addNewNote = (note) => ({
  type: ADD_NEW_NOTE,
  note: prepareNote(note),
})

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  id,
})

export const editNote = (id, text) => ({
  type: DELETE_NOTE,
  id,
})

export const selectNote = (id) => ({
  type: SELECT_NOTE,
  id,
})
