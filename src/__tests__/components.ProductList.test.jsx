import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import ProductList from '../components/ProductList'

import mockProducts from '../data/mockProducts'

describe('ProductList', () => {
  let props
  let mountedProductList

  const productList = () => {
    if (!mountedProductList) {
      mountedProductList = mount(
        <MemoryRouter>
          <ProductList {...props} />
        </MemoryRouter>,
      )
    }

    return mountedProductList
  }

  beforeEach(() => {
    props = {
      products: undefined,
      isLoading: undefined,
      hasErrored: undefined,
    }

    mountedProductList = undefined
  })

  it('Always renders a div', () => {
    const divs = productList().find('div')
    expect(divs.length).toBeGreaterThan(0)
  })

  describe('When `products` is defined', () => {
    beforeEach(() => {
      props.products = mockProducts
    })

    it('renders the correct number of product items', () => {
      const listItems = productList().find('ProductItem')
      expect(listItems.length).toEqual(props.products.length)
    })
  })
})
