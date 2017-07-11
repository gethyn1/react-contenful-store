// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const title = 'Page not found'

const NotFoundPage = () => (
  <div className="u-padding-top">
    <Helmet
      title={title}
    />
    <div className="u-text-center">
      <h2 className="u-h3">404 page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>Why not browse the products in our <Link to="/">store</Link> instead?</p>
    </div>
  </div>
)

export default NotFoundPage
