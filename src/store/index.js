import { createStore as createReduxStore } from 'redux'
import rootReducer from '../reducers'

const createStore = (initialState) => {
  const store = createReduxStore(
    rootReducer,
    initialState,
  )
  return store
}

export { createStore }
