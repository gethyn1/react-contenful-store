// @flow

import client from '../utils/contentful'

export const SEARCH_IS_VISIBLE = 'SEARCH_IS_VISIBLE'
export const SEARCH_IS_LOADING = 'SEARCH_IS_LOADING'
export const SEARCH_HAS_ERRORED = 'SEARCH_HAS_ERRORED'
export const SEARCH_NO_RESULTS = 'SEARCH_NO_RESULTS'
export const SEARCH_RESET_DATA = 'SEARCH_RESET_DATA'
export const SEARCH_FETCH_DATA_SUCCESS = 'SEARCH_FETCH_DATA_SUCCESS'

export const searchIsVisible = (payload: boolean) => ({
  type: SEARCH_IS_VISIBLE,
  payload,
})


export const searchIsLoading = (payload: boolean) => ({
  type: SEARCH_IS_LOADING,
  payload,
})

export const searchHasErrored = (payload: boolean) => ({
  type: SEARCH_HAS_ERRORED,
  payload,
})

export const searchNoResults = (payload: boolean) => ({
  type: SEARCH_NO_RESULTS,
  payload,
})

export const searchFetchDataSuccess = (payload: ?Object) => ({
  type: SEARCH_FETCH_DATA_SUCCESS,
  payload,
})

export const searchResetData = () => ({
  type: SEARCH_RESET_DATA,
})

export const searchFetchData = (term: string) => (dispatch: Function) => {
  dispatch(searchIsLoading(true))
  dispatch(searchNoResults(false))

  return client.getEntries({
    content_type: 'product',
    'fields.productTitle[match]': term,
  })
    .then((response) => {
      dispatch(searchIsLoading(false))
      if (!response.items.length) {
        dispatch(searchNoResults(true))
      }

      dispatch(searchFetchDataSuccess(response.items))
    })
    .catch(() => {
      dispatch(searchIsLoading(false))
      dispatch(searchHasErrored(true))
    })
}
