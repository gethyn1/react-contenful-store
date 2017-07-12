import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import { createClient } from 'contentful'

import { CONTENTFUL_SPACE, CONTENTFUL_ACCESS_TOKEN } from '../config'

import {
  productIsLoading,
  productHasErrored,
  productFetchData,
  productFetchDataSuccess,
} from '../actions/product'

const mockStore = configureMockStore([thunkMiddleware])

const client = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

const badClient = createClient({
  space: '404',
  accessToken: '404',
})

test('Fetch product from API: success', () => {
  const store = mockStore()

  client.getEntries({
    'sys.id': '3qRKBH2C0Mcogc0oysEAmI',
  })
    .then(response =>
      store.dispatch(productFetchData())
        .then(() => {
          expect(store.getActions()).toEqual([
            productIsLoading(true),
            productIsLoading(false),
            productFetchDataSuccess(response.items[0]),
          ])
        })
        .catch(err => err),
    )
    .catch(err => err)
})

test('Fetch product from API: 404', () => {
  const store = mockStore()

  badClient.getEntries({
    'sys.id': '3qRKBH2C0Mcogc0oysEAmI',
  })
    .then(() =>
      store.dispatch(productFetchData())
        .then(() => {
          expect(store.getActions()).toEqual([
            productIsLoading(true),
            productHasErrored(true),
          ])
        })
        .catch(err => err),
    )
    .catch(err => err)
})
