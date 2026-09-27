const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

class SimpleTodo extends Component {
  state = {todosList: initialTodosList}

  onDeleteTodo = id => {
    this.setState(prevState => ({
      todosList: prevState.todosList.filter(eachTodo => eachTodo.id !== id),
    }))
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="simple-todos-container">
        <h1 className="heading">Simple Todos</h1>
        <ul className="todos-list">
          {todosList.map(eachTodo => (
            <TodoItem
              key={eachTodo.id}
              todoDetails={eachTodo}
              onDeleteTodo={this.onDeleteTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodo