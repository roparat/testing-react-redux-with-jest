import { ADD_TODO } from '../actions/types'

const todoReducerInitialState = []

export const todoReducer = (state = todoReducerInitialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const id = 1 + state.reduce((max, cur) => Math.max(max, cur.id), 0)
      const newTodo = {
        id,
        text: action.payload.text,
        complete: false,
      }
      return ([...state, newTodo])
    }
    default:
      return state
  }
}

export default todoReducer
