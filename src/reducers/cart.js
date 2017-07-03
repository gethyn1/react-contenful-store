// @flow

import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from '../actions/cart'

export const initialState = {
  totalItems: 0,
  items: [],
}

export const cart = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      // First check if the item already exists in the cart
      // If it does exist then update the quantity of the item
      // Otherwise add the new item to the cart
      let itemExists = false

      const updatedItems = state.items.map((item) => {
        const newItem = item

        if (
            item.id === action.payload.item.id
            && item.size === action.payload.item.size
            && JSON.stringify(item.color) === JSON.stringify(action.payload.item.color)
        ) {
          itemExists = true
          newItem.quantity += action.payload.quantity
        }
        return newItem
      })

      if (itemExists) {
        return Object.assign({}, state, {
          totalItems: state.totalItems + action.payload.quantity,
          items: updatedItems,
        })
      }

      const itemToAdd = action.payload.item
      itemToAdd.quantity = action.payload.quantity

      return Object.assign({}, state, {
        totalItems: state.totalItems + action.payload.quantity,
        items: [
          ...state.items,
          itemToAdd,
        ],
      })
    }
    case REMOVE_ITEM_FROM_CART: {
      // Iterate over all items in cart
      // Remove items by specified quantity
      // If quantity is zero, completey remove item from cart
      const { id, quantity } = action.payload

      const mapItems = state.items.map((item) => {
        const newItem = item

        if (item.id === id) {
          newItem.quantity -= quantity
        }

        return newItem
      })

      const filterItems = mapItems.filter(item => item.quantity)

      return Object.assign({}, state, {
        totalItems: state.totalItems - quantity,
        items: filterItems,
      })
    }
    default:
      return state
  }
}
