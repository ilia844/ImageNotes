import porsheImg from '../../assets/img/Porshe.jpeg'

import * as types from '../actions/notesAction'

const initialState = {
  currentImage: porsheImg,
  notes: [],
  activeNoteId: 0,
}

const notesReducer = (state = initialState, action) => {
  let notes = []

  switch (action.type) {
    case types.ADD_NEW_IMAGE: {
      return {
        ...state,
        currentImage: action.image,
      }
    }

    case types.ADD_NEW_NOTE: {
      notes = [...state.notes].map((note) => ({ ...note, isActive: false }))
      notes.push(action.note)
      return {
        ...state,
        notes: notes,
        activeNoteId: action.note.id,
      }
    }

    case types.EDIT_NOTE: {
      notes = state.notes.slice()
      notes.map((note) => {
        if (note.id === action.id) {
          return { ...note, noteText: action.text }
        } else {
          return note
        }
      })
      console.log(notes)
      return {
        ...state,
        notes,
      }
    }

    case types.DELETE_NOTE: {
      notes = state.notes.filter((note) => note.id !== action.id)
      return {
        ...state,
        notes,
      }
    }

    case types.SELECT_NOTE: {
      notes = state.notes.map((note) => ({
        ...note,
        isActive: note.id === action.id,
      }))
      return {
        ...state,
        notes: notes,
        activeNoteId: action.id,
      }
    }

    default:
      return state
  }
}

export default notesReducer
