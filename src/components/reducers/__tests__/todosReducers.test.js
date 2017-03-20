import todosReducer from '../todoReducer'
import { ADD_TODO } from '../../../actions/types'

describe('todoReducer', () => {
  it('returns correct initial state', () => {
    expect(todosReducer(undefined, {})).toEqual([])
  })

  it('returns current state if no action matched', () => {
    const curState = [
      { id: 1, text: 'Feed cat', complete: false },
    ]
    const nextState = todosReducer(curState, {})

    expect(nextState).toBe(curState) // pointer
    expect(nextState).toEqual(curState) // value
  })

  it('adds todos when receiving ADD_TODO action', () => {
    const curState = [
      { id: 1, text: 'Feed cat', complete: false },
    ]
    const action = {
      type: ADD_TODO,
      payload: { text: 'Sleep' },
    } // not good, if we change actions
    const nextState = todosReducer(curState, action)
    const expectedState = [
      { id: 1, text: 'Feed cat', complete: false },
      { id: 2, text: 'Sleep', complete: false },
    ]

    expect(nextState).toEqual(expectedState)
    expect(nextState).not.toBe(curState) // check for immutable
  })
})
