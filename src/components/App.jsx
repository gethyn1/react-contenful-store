// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import TopBar from './TopBar'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

const App = () => (
  <div>
    <TopBar />
    <Switch>
      <Route exact path={'/'} render={() => <HomePage />} />
      <Route path={'/product/:productId'} render={() => <ProductPage />} />
    </Switch>
  </div>
)

export default App
