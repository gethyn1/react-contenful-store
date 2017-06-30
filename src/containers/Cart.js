// @flow
/* eslint-disable */
import { connect } from 'react-redux'

import { cartRemoveItem } from '../actions/cart'
import Cart from '../components/Cart'

const mapStateToProps = (state: Object) => ({
  items: state.cart.items,
})

const mapDispatchToProps = (dispatch: Function) => ({
  removeItem: () => {
    console.log('Remove item')
  },
})

const AllProducts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart)

export default AllProducts
/* eslint-enable */
