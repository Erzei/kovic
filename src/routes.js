import React from 'react'
import { Route } from 'react-router'
import Home from './containers/home/HomeContainer'
import './app.global'

export const Routes = () => (
  <Route
    path='/'
    render={() => (
      <Route
        component={Home}
        exact
        path='/'
      />
    )}
  />
)

export default Routes
