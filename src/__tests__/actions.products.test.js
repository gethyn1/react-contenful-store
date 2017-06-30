import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import { createClient } from 'contentful'

import { CONTENTFUL_SPACE, CONTENTFUL_ACCESS_TOKEN } from '../config'

import {
  productsIsLoading,
  productsHasErrored,
  productsFetchData,
  productsFetchDataSuccess,
} from '../actions/products'

const mockStore = configureMockStore([thunkMiddleware])

const client = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

const badClient = createClient({
  space: '404',
  accessToken: '404',
})

test('Fetch products from API: success', () => {
  const store = mockStore()

  client.getEntries()
    .then(response =>
      store.dispatch(productsFetchData())
        .then(() => {
          expect(store.getActions()).toEqual([
            productsIsLoading(true),
            productsIsLoading(false),
            productsFetchDataSuccess(response.items),
          ])
        })
        .catch(err => err),
    )
    .catch(err => err)
})

test('Fetch products from API: 404', () => {
  const store = mockStore()

  badClient.getEntries()
    .then(() =>
      store.dispatch(productsFetchData())
        .then(() => {
          expect(store.getActions()).toEqual([
            productsIsLoading(true),
            productsHasErrored(true),
          ])
        })
        .catch(err => err),
    )
    .catch(err => err)
})
