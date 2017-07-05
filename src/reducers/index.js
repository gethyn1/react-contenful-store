// @flow

import { combineReducers } from 'redux'

import { alert } from './alert'
import { cart } from './cart'
import { products } from './products'
import { product } from './product'

const rootReducer = combineReducers({
  alert,
  cart,
  products,
  product,
})

export default rootReducer
