// @flow

import React from 'react'
import { Helmet } from 'react-helmet'

import { APP_NAME } from '../../config'

import AllProducts from '../../containers/AllProducts'

const title = 'Products'

const ProductsPage = () => (
  <div className="u-padding-top">
    <Helmet
      title={`${APP_NAME}: ${title}`}
      meta={[
        { name: 'description', content: '' },
        { property: 'og:title', content: `${APP_NAME}: ${title}` },
      ]}
    />
    <h1 className="u-h2 u-text-center">{title}</h1>
    <AllProducts />
  </div>
)

export default ProductsPage
