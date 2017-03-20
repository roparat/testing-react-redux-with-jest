import React, { Component, PropTypes } from 'react'

class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }
  changeHandler(e) {
    this.setState({
      text: e.target.value,
    })
  }
  clickHandler() {
    this.props.addTodo(this.state.text)
  }
  render() {
    return (
      <div className="new-todo">
        <input onChange={this.changeHandler} value={this.state.text} />
        <button
          className="btn btn-primary"
          onClick={this.clickHandler}
        >Add</button>
      </div>
    )
  }
}

NewTodo.propTypes = {
  addTodo: PropTypes.func,
}

export default NewTodo
