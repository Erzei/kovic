import { applyMiddleware, createStore } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import Api from './lib/api'
import logic from './lib/redux/logic-index'
import reducers from './lib/redux/reducers-index'

const configureStore = (initialState, history) => {
  const composeEnhancers = composeWithDevTools({
    serialize: true,
    shouldCatchErrors: true,
    trace: true
  })
  const logicMiddleware = createLogicMiddleware(logic, {
    api: new Api()
  })
  const middleware = applyMiddleware(
    routerMiddleware(history),
    logicMiddleware
  )
  const store = createStore(
    reducers(history),
    initialState,
    composeEnhancers(middleware)
  )

  if (module.hot) {
    module.hot.accept('./lib/redux/logic-index', () => {
      store.replaceReducer(reducers(history))
    })
  }

  return store
}

export default configureStore
