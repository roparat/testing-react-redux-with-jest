import React from 'react'
import TodoList from '../containers/TodoList';
import NewTodo from '../containers/NewTodo';

const App = () => (
  <div className="todo-app">
    <NewTodo />
    <TodoList />
  </div>
)

export default App
