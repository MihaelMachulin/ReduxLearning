import React, {Component} from 'react'
import {connect} from 'react-redux' // Подключает стейт к стору
// Внизу - в экспорте - мы обернём в connect наш App
import './App.css'
import {rootReducer} from './redux/rootReducer'



class App extends Component {
  // state = {     // Теперь вместо стейта
  //   counter: 0  // Redux Store
  // }

  updateCounter(value) {



    // this.setState({                        // БезReduxовое обновление state
    //   counter: this.state.counter + value
    // })
  }

  render() {
    //console.log(this.props)
    return (
      <div className={'App'}>
        {/* Раньше мы обращались к this.state.counter
        //  А теперь к props. Это потому, что мы связали
        //  компонент App с помощью connect со store
        //  а state.counter добавили в props.counter
        //  в функции-аргументе mapStateToProps           */}
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить</button>
          <button onClick={this.props.onSub}>Вычесть</button>
          <input type="text" onChange={this.props.onInput}/>
        </div>
      </div>
    )
  }
}


// как ясно из названия эта функция выводит поля
// из стейта в props - параметры
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

// Тоже самое что выше только для отправки изменений в стор
function mapDispatchToProps(dispatch){
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'}),
    onInput: (event) => dispatch({type: 'INPUT', value: event.target.value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
//connect - вернёт функцию в которую мы вложим App
//сама connect принимает в себя две функции