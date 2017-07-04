// @flow

import React from 'react'

import CartItem from './CartItem'
import ListBare from './ListBare'

import styles from '../styles/6-components/_components.cart.scss'

type Props = {
  totalItems: number,
  items: Array<Object>,
  removeItem: Function,
  increaseQuantity: Function,
  decreaseQuantity: Function,
}

const Cart = ({ totalItems, items, removeItem, increaseQuantity, decreaseQuantity }: Props) => {
  const cartItems = items.map(item => (
    <li key={item.id + item.size + item.color.hex} className={styles.item}>
      <CartItem
        item={item}
        onRemoveItem={removeItem}
        onIncreaseQuantity={increaseQuantity}
        onDecreaseQuantity={decreaseQuantity}
      />
    </li>
  ))

  return (
    <div>
      <p>You have {totalItems} items in your cart</p>
      <ListBare>
        {cartItems}
      </ListBare>
    </div>
  )
}

Cart.defaultProps = {
  totalItems: 0,
  items: [],
  removeItem: () => {},
}

export default Cart
