// @flow

import { combineReducers } from 'redux'

import { cart } from './cart'
import { products } from './products'
import { product } from './product'

const rootReducer = combineReducers({
  cart,
  products,
  product,
})

export default rootReducer
