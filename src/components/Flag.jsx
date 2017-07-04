// @flow

import React from 'react'

import styles from '../styles/5-objects/_objects.flag.scss'

type Props = {
  children: React.Element<*>,
  src: string,
  size?: string,
  align?: string,
}

const Flag = ({ children, src, size, align }: Props) => {
  const sizeClass = size ? `o-flag--${size}` : ''
  const alignClass = align ? `o-flag--${align}` : ''

  return (
    <div className={`${styles['o-flag']} ${styles[String(sizeClass)]} ${styles[String(alignClass)]}`}>
      <div className={styles['o-flag__img']}>
        <img src={src} alt="" />
      </div>
      <div className={styles['o-flag__body']}>
        {children}
      </div>
    </div>
  )
}

Flag.defaultProps = {
  size: '',
  align: '',
}

export default Flag
