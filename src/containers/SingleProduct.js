// @flow

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { cartAddItem } from '../actions/cart'
import { productFetchData } from '../actions/product'

import Product from '../components/Product'

const mapStateToProps = (state: Object, ownProps: Object) => ({
  productId: ownProps.match.params.productId,
  isLoading: state.product.isLoading,
  hasErrored: state.product.hasErrored,
  product: state.product.item,
})

const mapDispatchToProps = (dispatch: Function) => ({
  fetchProduct: (id: String) => {
    dispatch(productFetchData(id))
  },
  addItemToCart: (item: Object) => {
    dispatch(cartAddItem(item))
  },
})

const SingleProduct = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product))

export default SingleProduct
