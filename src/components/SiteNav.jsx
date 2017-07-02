// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import ListBare from './ListBare'

import styles from '../styles/6-components/_components.site-nav.scss'

type Props = {
  items: Array<Object>,
}

const SiteNav = ({ items }: Props) => (
  <nav className={styles.root}>
    <ListBare>
      {items.map(item => (
        <li className={styles.item} key={item.id}>
          <Link to={item.link} className={styles.link}>{item.title}</Link>
        </li>
      ))}
    </ListBare>
  </nav>
)

export default SiteNav
