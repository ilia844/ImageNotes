import * as types from '../actions/noteAction'

const initialState = {
  noteText: '',
  relativeX: 0,
  relativeY: 0,
}

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_NOTE_VALUE: {
      return {
        ...state,
        noteText: action.value,
      }
    }

    case types.SET_NOTE_POSITION: {
      return {
        ...state,
        relativeX: action.relX,
        relativeY: action.relY,
      }
    }

    case types.RESET_NOTE: {
      return {
        ...state,
        noteText: '',
        relativeX: 0,
        relativeY: 0,
      }
    }

    default:
      return state
  }
}

export default noteReducer
