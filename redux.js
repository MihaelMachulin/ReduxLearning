const redux = require('redux')

const initialState = {
  counter: 0
}

// Составные части Redux // Reducer // Store // Actions

// Reducer - JS Функция - возвращает новый стейт
// action - объект с обязательным полем type
const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') { //Т.е. мы с сами задаём ключ и действия по этому ключу
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === 'SUB') {
    return {
      counter: state.counter - 1
    }
  }

  if (action.type === 'ADD_NUMBER') {
    return {
      counter: state.counter + action.value
    }
  }

  return state
}
// Store - в нём содержится всё состояние всего приложения
// getState() Встроенная функция - получить состояние Store
const store = redux.createStore(reducer)
console.log('1', store.getState())

// subscribe - метод "подписки" на изменение Store
store.subscribe(() => {
  console.log('Subscribe', store.getState())
})

// Actions - меняет Store
const addCounter = {
  type: 'ADD'
}


// .dispatch(action) метод для отправки действия над стейтом в стор
store.dispatch(addCounter)
console.log('2', store.getState())
store.dispatch({type: 'SUB'}) // Отправляем объект-действия прямо в аргументе метода
console.log('3', store.getState())
store.dispatch({type: 'ADD_NUMBER', value: 10})
console.log('4', store.getState())

//