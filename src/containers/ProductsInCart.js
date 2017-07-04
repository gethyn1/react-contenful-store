// @flow
import { connect } from 'react-redux'

import { cartAddItem, cartRemoveItem } from '../actions/cart'
import Cart from '../components/Cart'

const mapStateToProps = (state: Object) => ({
  totalItems: state.cart.totalItems,
  items: state.cart.items,
})

const mapDispatchToProps = (dispatch: Function) => ({
  removeItem: (item: Object, quantity: number) => {
    dispatch(cartRemoveItem({ item, quantity }))
  },
  increaseQuantity: (item: Object, quantity: number) => {
    dispatch(cartAddItem({ item, quantity }))
  },
  decreaseQuantity: (item: Object, quantity: number) => {
    dispatch(cartRemoveItem({ item, quantity }))
  },
})

const ProductsInCart = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart)

export default ProductsInCart
