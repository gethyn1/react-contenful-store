// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import SiteAlert from '../containers/SiteAlert'

import TopBar from './TopBar'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

import Container from './Container'

const App = () => (
  <div>
    <SiteAlert />
    <Container>
      <TopBar />
      <Switch>
        <Route exact path={'/'} render={() => <HomePage />} />
        <Route exact path={'/cart'} render={() => <CartPage />} />
        <Route path={'/product/:productId'} render={() => <ProductPage />} />
      </Switch>
    </Container>
  </div>
)

export default App
