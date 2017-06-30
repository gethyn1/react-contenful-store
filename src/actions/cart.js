// @flow

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'

export const cartAddItem = (payload: Object) => ({
  type: ADD_ITEM_TO_CART,
  payload,
})

export const cartRemoveItem = (payload: Object) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload,
})
