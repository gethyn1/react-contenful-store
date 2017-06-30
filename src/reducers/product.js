// @flow

import {
  PRODUCT_IS_LOADING,
  PRODUCT_HAS_ERRORED,
  PRODUCT_FETCH_DATA_SUCCESS,
} from '../actions/product'

export const initialState = {
  isLoading: false,
  hasErrored: false,
  item: undefined,
}

export const product = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case PRODUCT_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload,
      })
    case PRODUCT_HAS_ERRORED:
      return Object.assign({}, state, {
        hasErrored: action.payload,
      })
    case PRODUCT_FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        item: action.payload,
      })
    default:
      return state
  }
}
