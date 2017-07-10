// @flow

import { combineReducers } from 'redux'

import { alert } from './alert'
import { cart } from './cart'
import { products } from './products'
import { product } from './product'
import { search } from './search'

const rootReducer = combineReducers({
  alert,
  cart,
  products,
  product,
  search,
})

export default rootReducer
