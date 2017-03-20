import React from 'react'
import configureMockStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import NewTodoContainer from '../NewTodo'
import NewTodo from '../../components/NewTodo'
import { ADD_TODO } from '../../actions/types'

describe('NewTodo Container', () => {
  const createStore = configureMockStore()
  let component
  let store
  beforeEach(() => {
    const state = { todos: [] }
    store = createStore(state)
    component = mount(
      <Provider store={store}>
        <NewTodoContainer />
      </Provider>
    ).find(NewTodoContainer).find(NewTodo)
  })
  it('dispatches ADD_TODO action via props.addTodo', () => {
    component.props().addTodo('Hello')
    const actions = store.getActions()

    const expectedActions = [{
      type: ADD_TODO,
      payload: { text: 'Hello' },

    }]

    expect(actions).toEqual(expectedActions)
  })
})
