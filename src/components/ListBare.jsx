// @flow

import React from 'react'

import styles from '../styles/objects/_ListBare.scss'

type Props = {
  children: React.Element<*>,
}

const ListBare = ({ children }: Props) => (
  <ul className={styles.list}>
    {children}
  </ul>
)

export default ListBare
