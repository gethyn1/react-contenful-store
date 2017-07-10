// @flow

import React from 'react'

import { Link } from 'react-router-dom'

import Icon from './Icon'

// eslint-disable-next-line no-unused-vars
import handbagIcon from '../images/icons/handbag.svg'

import styles from '../styles/6-components/_components.mini-cart.scss'

type Props = {
  totalItems: number,
}

const MiniCart = ({ totalItems }: Props) => {
  let countClass = styles.count

  if (totalItems) {
    countClass += ` ${styles['has-items']}`
  }

  return (
    <Link to="/cart" className={styles.link}>
      <Icon type="handbag" size="32" /><span className={countClass}>{totalItems || 0}</span>
    </Link>
  )
}

export default MiniCart
