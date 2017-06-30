// @flow

import React from 'react'
import { Helmet } from 'react-helmet'

import { APP_NAME } from '../../config'

import ProductsInCart from '../../containers/ProductsInCart'
import SingleProduct from '../../containers/SingleProduct'

const title = 'Product page'

const PostPage = () => (
  <div>
    <Helmet
      title={`${APP_NAME}: ${title}`}
      meta={[
        { name: 'description', content: '' },
        { property: 'og:title', content: `${APP_NAME}: ${title}` },
      ]}
    />
    <ProductsInCart />
    <SingleProduct />
  </div>
)

export default PostPage
