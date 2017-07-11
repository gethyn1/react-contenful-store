// @flow

import React from 'react'
import { Helmet } from 'react-helmet'

import { APP_NAME } from '../../config'

import AllProducts from '../../containers/AllProducts'

import Banner from '../Banner'
import Button from '../Button'

import smallImage from '../../images/content/banner-small.jpg'
import largeImage from '../../images/content/banner-large.jpg'

const title = 'Products'

const bannerImages = {
  small: smallImage,
  large: largeImage,
}

const HomePage = () => (
  <div>
    <Helmet
      title={`${APP_NAME}: ${title}`}
      meta={[
        { name: 'description', content: '' },
        { property: 'og:title', content: `${APP_NAME}: ${title}` },
      ]}
    />
    <div className="u-margin-bottom-lg">
      <Banner images={bannerImages}>
        <h2 className="u-h2 u-margin-bottom-sm">React Online Store</h2>
        <p>Built with Redux and the Contentful API.</p>
        <Button type="Link" to="/about" text="Find out more" level="primary" />
      </Banner>
    </div>
    <AllProducts />
  </div>
)

export default HomePage
