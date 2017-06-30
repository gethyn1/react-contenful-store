// @flow

import React from 'react'

import CartItem from './CartItem'

type Props = {
  totalItems: number,
  items: Array<Object>,
  removeItem: Function,
}

class Cart extends React.Component {
  static defaultProps: Object

  constructor(props: Props) {
    super(props)

    this.onDeleteItem = this.onDeleteItem.bind(this)
  }

  onDeleteItem: Function

  onDeleteItem(id: String, quantity: number) {
    this.props.removeItem(id, quantity)
  }

  props: Props


  render() {
    const {
      items,
      totalItems,
    } = this.props

    const cartItems = items.map(item => (
      <li key={item.id}>
        <CartItem item={item} removeItem={this.onDeleteItem} />
      </li>
    ))

    return (
      <div>
        <p>You have {totalItems} items in your cart</p>
        <ul>
          {cartItems}
        </ul>
      </div>
    )
  }
}

Cart.defaultProps = {
  totalItems: 0,
  items: [],
  removeItem: () => {},
}

export default Cart
