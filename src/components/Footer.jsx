// @flow

import React from 'react'

import { APP_NAME } from '../config'

import styles from '../styles/6-components/_components.footer.scss'

const Footer = () => (
  <footer className={styles.root}>
    <p>&copy; {APP_NAME} 2017</p>
  </footer>
)

export default Footer
