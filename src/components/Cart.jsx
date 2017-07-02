// @flow

import React from 'react'

import CartItem from './CartItem'

type Props = {
  totalItems: number,
  items: Array<Object>,
  removeItem: Function,
}

const handleRemoveItem = (id: String, quantity: number, removeItem: Function) => {
  removeItem(id, quantity)
}

const Cart = ({ totalItems, items, removeItem }: Props) => {
  const cartItems = items.map(item => (
    <li key={item.id}>
      <CartItem
        item={item}
        removeItem={() => handleRemoveItem(item.id, item.quantity, removeItem)}
      />
    </li>
  ))

  return (
    <div>
      <p>You have {totalItems} items in your cart</p>
      <ul>
        {cartItems}
      </ul>
    </div>
  )
}

Cart.defaultProps = {
  totalItems: 0,
  items: [],
  removeItem: () => {},
}

export default Cart
