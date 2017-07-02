// @flow
import { connect } from 'react-redux'

import MiniCart from '../components/MiniCart'

const mapStateToProps = (state: Object) => ({
  totalItems: state.cart.totalItems,
})

const ProductsInCart = connect(
  mapStateToProps,
)(MiniCart)

export default ProductsInCart
