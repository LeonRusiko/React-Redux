import { Component } from 'react'
import { TodoList, Header } from "../components"
import { ITodo } from '../types'

interface IAppState {
  todos: ITodo[]
}

export default class App extends Component <{}, IAppState>{
  state = {
    todos: [{ id: 1, text: 'Learn react', done: true, important: true },
    { id: 2, text: 'Drink Water', done: false, important: false },
    { id: 3, text: 'Drink Cofee', done: true, important: true }]
  }

  onChangeStateTodos = (id: number, doneOr: boolean) => {

    this.setState((state) => {
      const todoIdX = state.todos.findIndex(item => id === item.id)
      let newTodo
      if(doneOr){
        newTodo = {
          ...state.todos[todoIdX],
          done: !state.todos[todoIdX].done
        }
      }else{
        newTodo = {
          ...state.todos[todoIdX],
          important: !state.todos[todoIdX].important
        }
      }

      const before = state.todos.slice(0, todoIdX)
      const after = state.todos.slice(todoIdX + 1)
      return{
        todos: [...before, newTodo, ...after]
      }
    })
  }

  render() {

    return (
      < div >
        <Header title="Todo App" />
        <TodoList todos={this.state.todos} onDone={this.onChangeStateTodos} onImportant={this.onChangeStateTodos}/>
      </div >
    )
  }
}

