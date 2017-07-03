// @flow

import React from 'react'
import shortid from 'shortid'

import ListBare from './ListBare'

import styles from '../styles/6-components/_components.size-picker.scss'

type Props = {
  sizes: Array<Object>,
  onSelect: Function,
  selected: string,
}

const handleSelect = (size: Object, func: Function) => {
  if (size.available) {
    return func(size)
  }

  return null
}

const SizePicker = ({ sizes, onSelect, selected }: Props) => {
  const items = sizes.map((size) => {
    const availableClass = size.available ? styles.available : ''
    const selectedClass = selected === size.size ? styles.selected : ''
    const id = shortid.generate()

    return (
      /* eslint-disable */
      <li
        key={id}
        role="button"
        className={`${styles.size} ${availableClass} ${selectedClass}`}
        onClick={() => handleSelect(size, onSelect)}
      >{size.size}</li>
    /* eslint-enable */
    )
  })

  return (
    <ListBare className={styles.root}>
      {items}
    </ListBare>
  )
}

export default SizePicker
