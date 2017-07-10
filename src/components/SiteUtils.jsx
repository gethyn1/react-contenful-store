// @flow

import React from 'react'

import CartMeta from '../containers/CartMeta'
import ProductSearch from '../containers/ProductSearch'

import ListBare from './ListBare'

import styles from '../styles/6-components/_components.site-utils.scss'

const SiteUtils = () => (
  <ListBare className={styles.root}>
    <li className={styles.item}>
      <ProductSearch />
    </li>
    <li className={styles.item}>
      <CartMeta />
    </li>
  </ListBare>
)

export default SiteUtils
