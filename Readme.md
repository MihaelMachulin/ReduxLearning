#Redux - краткое содержание
[Документация API](https://react-redux.js.org/api/provider)  
[Combine Reducers, redux devtools VID](https://www.youtube.com/watch?v=ldgnmiPIftw)

Библиотеки: redux и react-redux для сшивки с React
### Основные сущности Redux
**State** (стейт) - состояние элементов и компонентов - 
данные изменяемые и отображаемые/обновляемые в приложении.  
**Store** - централизованное (для всего приложения) хранилище стейта.
По конструкции - это объект JS со сложной структурой.  
**Reducer** - функция обработчик событий\действий - принимает 
Actions и меняет Store По конструкции это набор if/then / 
switch/case операторов определяющих нужное действие по 
входящему ключу  
**Actions** - действия/события отрабатываемые Редьюсером. 
По конструкции - это объект с обязательным ключом type по 
которому Reducer будет принимать решение - что делать со стейтом.
В других ключах могут храниться значения value.

```js
import {createStore} from 'redux'
import {Provider} from 'react-redux'
```
``createStore()`` - метод для создания Store  
``<Provider>`` - компонент в который обёртывается всё 
приложение <App> чтобы дать всем вложенным элементам доступ к Store.
```js
const store = createStore(rootReducer)
  ...
<Provider store={store}>  <App/>  </Provider>
```
Подписка на состояние
store.subscribe(() => {})
connect()

mapStateToProps() - 
mapDispatchToProps()

react-redux udeDispatch

Можно напрямую передавать Store в компонент - но не нужно,
так-как есть <Provider>
import {combineReducers} from 'redux' - собирает несколько Редьюсеров







