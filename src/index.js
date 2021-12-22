// Store - централизованное Redux-хранилище стейта всего приложение

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux' // Библиотека для спайки реакта с редаксом
import rootReducer from './redux/rootReducer'


const store = createStore(rootReducer)

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
