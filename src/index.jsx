import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import thunkMiddleware from 'redux-thunk'

import { isProd } from './config'

import App from './components/App'

// eslint-disable-next-line
import sass from './styles/style.scss'

// Redux
import * as alert from './reducers/alert'
import * as cart from './reducers/cart'
import * as product from './reducers/product'
import * as products from './reducers/products'
import rootReducer from './reducers/index'

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
/* eslint-enable no-underscore-dangle */

const initialState = {
  alert: alert.initialState,
  cart: cart.initialState,
  product: product.initialState,
  products: products.initialState,
}

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
)

const rootEl = document.getElementById('app')

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/App').default
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}
