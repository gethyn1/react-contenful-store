// @flow

import client from '../utils/contentful'

export const PRODUCTS_HAS_ERRORED = 'PRODUCTS_HAS_ERRORED'
export const PRODUCTS_IS_LOADING = 'PRODUCTS_IS_LOADING'
export const PRODUCTS_FETCH_DATA_SUCCESS = 'PRODUCTS_FETCH_DATA_SUCCESS'

export const productsHasErrored = (payload: boolean) => ({
  type: PRODUCTS_HAS_ERRORED,
  payload,
})

export const productsIsLoading = (payload: boolean) => ({
  type: PRODUCTS_IS_LOADING,
  payload,
})

export const productsFetchDataSuccess = (payload: Array<Object>) => ({
  type: PRODUCTS_FETCH_DATA_SUCCESS,
  payload,
})

export const productsFetchData = (limit: string = '50') => (dispatch: Function) => {
  dispatch(productsIsLoading(true))

  return client.getEntries({
    limit,
  })
    .then((response) => {
      dispatch(productsIsLoading(false))
      dispatch(productsFetchDataSuccess(response.items))
    })
    .catch(() => {
      dispatch(productsIsLoading(false))
      dispatch(productsHasErrored(true))
    })
}
