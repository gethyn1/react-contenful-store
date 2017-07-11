// @flow

import React from 'react'
import { Helmet } from 'react-helmet'

import { APP_NAME } from '../../config'

import SingleProduct from '../../containers/SingleProduct'

const title = 'Product page'

const PostPage = () => (
  <div className="u-padding-top">
    <Helmet
      title={`${APP_NAME}: ${title}`}
      meta={[
        { name: 'description', content: '' },
        { property: 'og:title', content: `${APP_NAME}: ${title}` },
      ]}
    />
    <SingleProduct />
  </div>
)

export default PostPage
