import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
  </ul>
)

TodoList.propTypes = {

}

export default TodoList
