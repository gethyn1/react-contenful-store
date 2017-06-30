// @flow

import {
  PRODUCTS_IS_LOADING,
  PRODUCTS_HAS_ERRORED,
  PRODUCTS_FETCH_DATA_SUCCESS,
} from '../actions/products'

export const initialState = {
  isLoading: false,
  hasErrored: false,
  items: [],
}

export const products = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case PRODUCTS_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload,
      })
    case PRODUCTS_HAS_ERRORED:
      return Object.assign({}, state, {
        hasErrored: action.payload,
      })
    case PRODUCTS_FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        items: action.payload,
      })
    default:
      return state
  }
}
