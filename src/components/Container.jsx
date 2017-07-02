// @flow

import React from 'react'

import styles from '../styles/5-objects/_objects.container.scss'

type Props = {
  children: React.Element<*>,
}

const Container = ({ children }: Props) => (
  <div className={styles['o-container']}>
    {children}
  </div>
)

export default Container
