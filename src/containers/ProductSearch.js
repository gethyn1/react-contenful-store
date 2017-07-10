// @flow
import { connect } from 'react-redux'

import {
  searchIsVisible,
  searchFetchData,
  searchResetData,
} from '../actions/search'
import Search from '../components/Search'

const mapStateToProps = (state: Object) => ({
  isVisible: state.search.isVisible,
  isLoading: state.search.isLoading,
  hasErrored: state.search.hasErrored,
  noResults: state.search.noResults,
  results: state.search.results,
  term: state.search.term,
})

const mapDispatchToProps = (dispatch: Function) => ({
  searchTermUpdate: (term: string) => {
    dispatch(searchFetchData(term))
  },
  clearResults: () => {
    dispatch(searchResetData())
  },
  toggleSearch: (toggle: boolean) => {
    dispatch(searchResetData())
    dispatch(searchIsVisible(toggle))
  },
})

const ProductsInCart = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search)

export default ProductsInCart
