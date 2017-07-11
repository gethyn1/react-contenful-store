// @flow

import React from 'react'

import styles from '../styles/6-components/_components.sticker.scss'

type Props = {
  text: string,
  className?: string,
}

const Sticker = ({ text, className }: Props) => (
  <span className={`${styles.root} ${String(className)}`}>{text}</span>
)

Sticker.defaultProps = {
  className: '',
}

export default Sticker
