import { initialState, products } from '../reducers/products'

import {
  PRODUCTS_IS_LOADING,
  PRODUCTS_HAS_ERRORED,
  PRODUCTS_FETCH_DATA_SUCCESS,
} from '../actions/products'

const loadingTestState = Object.assign({}, initialState, {
  isLoading: true,
})

const erroredTestState = Object.assign({}, initialState, {
  hasErrored: true,
})

const itemsTestState = Object.assign({}, initialState, {
  items: [{ id: '123' }],
})

describe('Products reducer', () => {
  it('should return the initial state', () => {
    expect(products(undefined, {})).toEqual(initialState)
  })

  it(`should handle ${PRODUCTS_IS_LOADING}`, () => {
    expect(
      products(initialState, {
        type: PRODUCTS_IS_LOADING,
        payload: true,
      }),
    )
    .toEqual(loadingTestState)
  })

  it(`should handle ${PRODUCTS_HAS_ERRORED}`, () => {
    expect(
      products(initialState, {
        type: PRODUCTS_HAS_ERRORED,
        payload: true,
      }),
    )
    .toEqual(erroredTestState)
  })

  it(`should handle ${PRODUCTS_HAS_ERRORED}`, () => {
    expect(
      products(initialState, {
        type: PRODUCTS_FETCH_DATA_SUCCESS,
        payload: [{ id: '123' }],
      }),
    )
    .toEqual(itemsTestState)
  })
})
