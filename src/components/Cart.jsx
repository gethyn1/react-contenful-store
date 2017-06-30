// @flow

import React from 'react'

type Props = {
  items: Array<Object>,
}

const Cart = ({ items }: Props) => (
  <p>You have {items.length} items in your cart</p>
)

Cart.defaultProps = {
  items: [],
}

export default Cart
