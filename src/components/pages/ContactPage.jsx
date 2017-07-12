// @flow

import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import { APP_NAME } from '../../config'

const title = 'Contact'

const CartPage = () => (
  <div className="s-body u-padding-top">
    <Helmet
      title={`${APP_NAME}: ${title}`}
      meta={[
        { name: 'description', content: '' },
        { property: 'og:title', content: `${APP_NAME}: ${title}` },
      ]}
    />
    <h1 className="u-h2 u-text-center u-margin-bottom-lg">{title}</h1>
    <div className="u-3/4@tablet u-center u-text-center">
      <p>Sorry, this isn&apos;t a real store!! Have a look at the <Link to="/about">about page</Link> to find out more. You can get in touch with the developer by visiting <a href="http://gethynjones.me">gethynjones.me</a>.</p>
    </div>
  </div>
)

export default CartPage
