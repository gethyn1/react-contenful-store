// @flow

import client from '../utils/contentful'

export const PRODUCT_HAS_ERRORED = 'PRODUCT_HAS_ERRORED'
export const PRODUCT_IS_LOADING = 'PRODUCT_IS_LOADING'
export const PRODUCT_FETCH_DATA_SUCCESS = 'PRODUCT_FETCH_DATA_SUCCESS'

export const productHasErrored = (payload: boolean) => ({
  type: PRODUCT_HAS_ERRORED,
  payload,
})

export const productIsLoading = (payload: boolean) => ({
  type: PRODUCT_IS_LOADING,
  payload,
})

export const productFetchDataSuccess = (payload: Array<Object>) => ({
  type: PRODUCT_FETCH_DATA_SUCCESS,
  payload,
})

export const productFetchData = (id: String) => (dispatch: Function) => {
  dispatch(productIsLoading(true))

  return client.getEntry(id)
    .then((response) => {
      dispatch(productIsLoading(false))
      dispatch(productFetchDataSuccess(response))
    })
    .catch(() => {
      dispatch(productIsLoading(false))
      dispatch(productHasErrored(true))
    })
}
