// @flow

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { alertSetAlert, alertRemoveAlert } from '../actions/alert'
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
  addItemToCart: (item: Object, quantity: number) => {
    dispatch(cartAddItem({ item, quantity }))
  },
  setAlert: (type: string, message: string) => {
    dispatch(alertSetAlert({ type, message }))
  },
  removeAlert: () => {
    dispatch(alertRemoveAlert())
  },
})

const SingleProduct = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product))

export default SingleProduct
