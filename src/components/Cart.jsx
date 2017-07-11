// @flow

import React from 'react'
import { Link } from 'react-router-dom'

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

  if (items.length) {
    const cartTotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    return (
      <div>
        <div className="u-margin-bottom-lg">
          <p>You have {totalItems} items in your cart</p>
        </div>
        <div className="u-margin-bottom-lg">
          <ListBare>
            {cartItems}
          </ListBare>
        </div>
        <div className={styles.utils}>
          <p className="u-h2">Total: &pound;{cartTotal}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="s-body u-text-center">
      <p>You currently have no items in your cart.</p>
      <p>Find some products in our <Link to="/">store</Link></p>
    </div>
  )
}

Cart.defaultProps = {
  totalItems: 0,
  items: [],
  removeItem: () => {},
}

export default Cart
