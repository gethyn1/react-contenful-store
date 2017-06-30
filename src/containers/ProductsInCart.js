// @flow
import { connect } from 'react-redux'

import { cartRemoveItem } from '../actions/cart'
import Cart from '../components/Cart'

const mapStateToProps = (state: Object) => ({
  totalItems: state.cart.totalItems,
  items: state.cart.items,
})

const mapDispatchToProps = (dispatch: Function) => ({
  removeItem: (id: String, quantity: number) => {
    dispatch(cartRemoveItem({ id, quantity }))
  },
})

const ProductsInCart = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart)

export default ProductsInCart
