// @flow

import React from 'react'

import styles from '../styles/5-objects/_objects.layout.scss'

type Props = {
  children: React.Element<*>,
}

type ItemProps = {
  children: React.Element<*>,
  cols: string,
}

export const Layout = ({ children }: Props) => (
  <div className={styles['o-layout']}>
    {children}
  </div>
)

export const LayoutItem = ({ children, cols }: ItemProps) => {
  const widthClass = cols ? `u-${cols}` : null

  return (
    <div className={`${styles['o-layout__item']} ${String(widthClass)}`}>
      {children}
    </div>
  )
}
