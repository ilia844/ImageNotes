import { combineReducers } from 'redux'

import notesReducer from './notesReducer'
import noteReducer from './noteReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  note: noteReducer,
})

export default rootReducer
