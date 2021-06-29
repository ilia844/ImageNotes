export const CHANGE_NOTE_VALUE = 'CHANGE_NOTE_VALUE'
export const SET_NOTE_POSITION = 'SET_NOTE_POSITION'
export const RESET_NOTE = 'RESET_NOTE'

export const changeNoteValue = (value) => ({
  type: CHANGE_NOTE_VALUE,
  value,
})

export const setNotePosition = (relX, relY) => ({
  type: SET_NOTE_POSITION,
  relX,
  relY,
})

export const resetNote = () => ({
  type: RESET_NOTE,
})
