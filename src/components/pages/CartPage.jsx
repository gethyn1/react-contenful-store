// @flow

import React from 'react'
import { Helmet } from 'react-helmet'

import { APP_NAME } from '../../config'

import ProductsInCart from '../../containers/ProductsInCart'

const title = 'Cart page'

const CartPage = () => (
  <div className="u-padding-top">
    <Helmet
      title={`${APP_NAME}: ${title}`}
      meta={[
        { name: 'description', content: '' },
        { property: 'og:title', content: `${APP_NAME}: ${title}` },
      ]}
    />
    <ProductsInCart />
  </div>
)

export default CartPage
