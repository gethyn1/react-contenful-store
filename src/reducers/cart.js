// @flow
/* eslint-disable */
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from '../actions/cart'

export const initialState = {
  items: [],
}

export const cart = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          action.payload
        ],
      })

    default:
      return state
  }
}
/* eslint-enable */
