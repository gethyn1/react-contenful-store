// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/components/_TopBar.scss'

import { APP_NAME } from '../config'

const TopBar = () => (
  <h1 className={styles.branding}>
    <Link to="/" className={styles.logo}>{APP_NAME}</Link>
  </h1>
)

export default TopBar
