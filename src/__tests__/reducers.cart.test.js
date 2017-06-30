/* eslint-disable */
import { initialState, cart } from '../reducers/cart'

import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from '../actions/cart'

const addItemTestState = Object.assign({}, initialState, {
  items: [{ id: '123', quantity: 1 }],
  totalItems: 1,
})

describe('Cart reducer', () => {
  it('should return the initial state', () => {
    expect(cart(undefined, {})).toEqual(initialState)
  })

  it(`should handle ${ADD_ITEM_TO_CART}`, () => {
    expect(
      cart(initialState, {
        type: ADD_ITEM_TO_CART,
        payload: { item: { id: '123' }, quantity: 1 },
      }),
    )
    .toEqual(addItemTestState)
  })
})
