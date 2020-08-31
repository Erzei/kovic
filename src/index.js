import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import configStore from './configStore'
import Routes from './routes'

const initialState = {
  application: {
    name: 'Kovic'
  }
}
const history = createBrowserHistory()
const store = configStore(initialState, history)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
