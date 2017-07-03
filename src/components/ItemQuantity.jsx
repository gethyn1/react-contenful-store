// @flow

import React from 'react'

import styles from '../styles/6-components/_components.item-quantity.scss'

type Props = {
  quantity: number,
  onIncrease: Function,
  onDecrease: Function,
  onChange: Function,
}

const ItemQuantity = ({ quantity, onIncrease, onDecrease, onChange }: Props) => (
  <div className={styles.root}>
    <button onClick={onDecrease} className={`${styles.button} decrease`}>-</button>
    <input type="number" name="quantity" onChange={onChange} value={quantity} className={styles.input} />
    <button onClick={onIncrease} className={`${styles.button} increase`}>+</button>
  </div>
)

export default ItemQuantity
