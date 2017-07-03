// @flow

import React from 'react'
import shortid from 'shortid'

import ListBare from './ListBare'

import styles from '../styles/6-components/_components.color-picker.scss'

type Props = {
  colors: Array<Object>,
  onSelect: Function,
  selected: Object,
}

const handleSelect = (color: Object, func: Function) => {
  if (color.available) {
    return func(color)
  }

  return null
}

const ColorPicker = ({ colors, onSelect, selected }: Props) => {
  const items = colors.map((color) => {
    const availableClass = color.available ? styles.available : ''
    const selectedClass = selected.hex === color.hex ? styles.selected : ''
    const id = shortid.generate()
    const swatchStyle = {
      backgroundColor: color.hex,
    }

    return (
      /* eslint-disable */
      <li
        key={id}
        role="button"
        className={`${styles.color} ${availableClass} ${selectedClass}`}
        onClick={() => handleSelect(color, onSelect)}
      >
        <span style={swatchStyle} className={styles.swatch}></span>
      </li>
    /* eslint-enable */
    )
  })

  return (
    <ListBare className={styles.root}>
      {items}
    </ListBare>
  )
}

export default ColorPicker
