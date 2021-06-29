const initialState = {
  test: 'string',
}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        test: 'stringTest',
      }
    default:
      return state
  }
}

export default testReducer
