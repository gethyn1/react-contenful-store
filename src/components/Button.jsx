// @flow

import React from 'react'

import styles from '../styles/components/_Button.scss'

type Props = {
  text: string,
  type?: string,
  onClick?: Function,
}

const Button = ({ text, type, onClick }: Props) => (
  <button onClick={onClick} type={type} className={styles.btn}>{text}</button>
)

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
}

export default Button
