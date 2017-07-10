// @flow

import {
  SEARCH_IS_VISIBLE,
  SEARCH_IS_LOADING,
  SEARCH_HAS_ERRORED,
  SEARCH_NO_RESULTS,
  SEARCH_RESET_DATA,
  SEARCH_FETCH_DATA_SUCCESS,
} from '../actions/search'

export const initialState = {
  isVisible: false,
  isLoading: false,
  hasErrored: false,
  noResults: false,
  results: [],
}

export const search = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SEARCH_IS_VISIBLE:
      return Object.assign({}, state, {
        isVisible: action.payload,
      })
    case SEARCH_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload,
      })
    case SEARCH_HAS_ERRORED:
      return Object.assign({}, state, {
        hasErrored: action.payload,
      })
    case SEARCH_NO_RESULTS:
      return Object.assign({}, state, {
        noResults: action.payload,
      })
    case SEARCH_RESET_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        hasErrored: false,
        noResults: false,
        results: [],
      })
    case SEARCH_FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        results: action.payload,
      })
    default:
      return state
  }
}
