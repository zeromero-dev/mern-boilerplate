import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history)
  })
}

export default createRootReducer
