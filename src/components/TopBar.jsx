// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import SiteUtils from './SiteUtils'
import SiteNav from './SiteNav'

import styles from '../styles/6-components/_components.top-bar.scss'

import { APP_NAME } from '../config'

const navItems = [
  {
    id: '1',
    title: 'Products',
    link: '/products',
  },
  {
    id: '2',
    title: 'About',
    link: '/about',
  },
  {
    id: '3',
    title: 'Contact',
    link: '/contact',
  },
]

const TopBar = () => (
  <div className={styles.root}>
    <div className={styles.utils}>
      <SiteUtils />
    </div>

    <span className={`${styles.branding} u-h1`}>
      <Link to="/" className={styles.logo}>{APP_NAME}.</Link>
    </span>

    <SiteNav items={navItems} />
  </div>
)

export default TopBar
