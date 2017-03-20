import React, { Component, PropTypes } from 'react'

import style from './TodoItem.css'

const TodoItem = ({ text, complete }) => (
  <li className={complete ? style.complete : ''}>{text}</li>
)

TodoItem.propTypes = {
  text: PropTypes.string,
  complete: PropTypes.bool,
}

TodoItem.defaultProps = {
  text: '',
  complete: false,
}

export default TodoItem
