import React, { Component } from 'react'
import Todos from "./Todos"
import AddTodo from "./AddTodo"

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Get a visa"},
      {id: 2, content: "Get your passport"}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });

    this.setState ({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center orange-text">Travelers</h1>
        <p className="center white-text subTitle">Keep track of all your travel todo's. Be prepared for your next trip!</p>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
