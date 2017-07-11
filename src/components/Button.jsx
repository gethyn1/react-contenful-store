// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/6-components/_components.button.scss'

type Props = {
  text: string,
  type?: string,
  level?: string,
  to?: string,
  onClick?: Function,
}

const Button = ({ text, type, level, to, onClick }: Props) => {
  const levelClass = styles[level]

  if (type === 'Link') {
    return (
      <Link onClick={onClick} to={to} className={`${styles.btn} ${levelClass}`}>{text}</Link>
    )
  }

  return (
    <button onClick={onClick} type={type} className={`${styles.btn} ${levelClass}`}>{text}</button>
  )
}

Button.defaultProps = {
  type: 'button',
  level: '',
  to: '',
  onClick: () => {},
}

export default Button
