import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import application from './application'

const reducers = {
  application
}

export default history => combineReducers({
  router: connectRouter(history),
  ...reducers
})
