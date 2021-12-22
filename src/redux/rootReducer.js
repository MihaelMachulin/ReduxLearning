
const initialState = {
  counter: 0,
  inputValue: 1
}

export default function rootReducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD': return {...state, counter: state.counter + state.inputValue} // прямое изменение невозможно в редаксе - каждый раз нужно создавать новый объект
    case 'SUB': return {...state, counter: state.counter - state.inputValue }
    case 'INPUT': console.log('Это редьюсер ', state.inputValue); return {...state, inputValue: +action.value}
  }

  return state
}