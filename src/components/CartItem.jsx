// @flow

import React from 'react'

type Props = {
  item: Object,
  removeItem: Function,
}

const CartItem = ({ item, removeItem }: Props) => {
  const handleClick = () => {
    removeItem(item.id, item.quantity)
  }

  return (
    <div>
      {item.title}: {item.quantity} - {item.size} - {item.color.hex}
      <button onClick={handleClick}>Remove</button>
    </div>
  )
}

export default CartItem
