import { initialState, product } from '../reducers/product'

import {
  PRODUCT_IS_LOADING,
  PRODUCT_HAS_ERRORED,
  PRODUCT_FETCH_DATA_SUCCESS,
} from '../actions/product'

const loadingTestState = Object.assign({}, initialState, {
  isLoading: true,
})

const erroredTestState = Object.assign({}, initialState, {
  hasErrored: true,
})

const productTestState = Object.assign({}, initialState, {
  item: { id: '123' },
})

describe('Product reducer', () => {
  it('should return the initial state', () => {
    expect(product(undefined, {})).toEqual(initialState)
  })

  it(`should handle ${PRODUCT_IS_LOADING}`, () => {
    expect(
      product(initialState, {
        type: PRODUCT_IS_LOADING,
        payload: true,
      }),
    )
    .toEqual(loadingTestState)
  })

  it(`should handle ${PRODUCT_HAS_ERRORED}`, () => {
    expect(
      product(initialState, {
        type: PRODUCT_HAS_ERRORED,
        payload: true,
      }),
    )
    .toEqual(erroredTestState)
  })

  it(`should handle ${PRODUCT_FETCH_DATA_SUCCESS}`, () => {
    expect(
      product(initialState, {
        type: PRODUCT_FETCH_DATA_SUCCESS,
        payload: { id: '123' },
      }),
    )
    .toEqual(productTestState)
  })
})
