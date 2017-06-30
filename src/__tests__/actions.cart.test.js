import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  cartAddItem,
  cartRemoveItem,
} from '../actions/cart'

const item = { id: '123' }

describe('Cart actions', () => {
  it('should create an action to add item to cart', () => {
    const expectedAction = {
      type: ADD_ITEM_TO_CART,
      payload: item,
    }

    expect(cartAddItem(item)).toEqual(expectedAction)
  })

  it('should create an action to remove item from cart', () => {
    const expectedAction = {
      type: REMOVE_ITEM_FROM_CART,
      payload: {
        id: item.id,
        quantity: 1,
      },
    }

    expect(cartRemoveItem({ id: item.id, quantity: 1 })).toEqual(expectedAction)
  })
})
