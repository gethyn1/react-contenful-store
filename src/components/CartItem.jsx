// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import Flag from './Flag'
import ItemQuantity from './ItemQuantity'

import styles from '../styles/6-components/_components.cart-item.scss'

type Props = {
  item: Object,
  onRemoveItem: Function,
  onIncreaseQuantity: Function,
  onDecreaseQuantity: Function,
}

const CartItem = ({ item, onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }: Props) => {
  const handleClick = () => {
    onRemoveItem(item, item.quantity)
  }

  const onQuantityChange = (event: Event & { target: HTMLInputElement }) => {
    const quantity = parseInt(event.target.value, 10)
    if (quantity > item.quantity) {
      onIncreaseQuantity(item, quantity - item.quantity)
    } else {
      onDecreaseQuantity(item, item.quantity - quantity)
    }
  }

  const handleIncrease = () => {
    onIncreaseQuantity(item, 1)
  }

  const handleDecrease = () => {
    const decrement = item.quantity === 1 ? 0 : 1
    onDecreaseQuantity(item, decrement)
  }

  const swatchStyles = {
    backgroundColor: item.color.hex,
  }

  return (
    <div className={styles.root}>
      <div>
        <Flag src={`${item.image.file.url}?w=80&h=80&fit=thumb&f=center`}>
          <Link to={`/product/${String(item.id)}`} className={styles.title}>
            <strong>{item.title}</strong>
          </Link>
          <p className={styles.meta}>
            Size: <span className={styles.size}>{item.size}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={styles.swatch} style={swatchStyles} />&nbsp;{item.color.name}&nbsp;
            &pound;{item.price}
          </p>
        </Flag>
      </div>
      <div className={styles.quantity}>
        <ItemQuantity
          quantity={item.quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onChange={onQuantityChange}
        />
        <button onClick={handleClick} className={styles.remove}>X remove</button>
      </div>
    </div>
  )
}

export default CartItem
