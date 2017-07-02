// @flow

import React from 'react'

import { Link } from 'react-router-dom'

import styles from '../styles/6-components/_components.mini-cart.scss'

type Props = {
  totalItems: number,
}

const MiniCart = ({ totalItems }: Props) => (
  <Link to="/cart" className={styles.link}>Cart ({totalItems || 0})</Link>
)

export default MiniCart
