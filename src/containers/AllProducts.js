// @flow

import { connect } from 'react-redux'

import { productsFetchData } from '../actions/products'
import ProductList from '../components/ProductList'

const mapStateToProps = (state: Object) => ({
  products: state.products.items,
  hasErrored: state.products.hasErrored,
  isLoading: state.products.isLoading,
})

const mapDispatchToProps = (dispatch: Function, ownProps: Object) => ({
  fetchData: () => {
    dispatch(productsFetchData(ownProps.limit))
  },
})

const AllProducts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList)

export default AllProducts
