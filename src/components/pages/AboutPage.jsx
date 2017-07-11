// @flow

import React from 'react'
import { Helmet } from 'react-helmet'

import { APP_NAME } from '../../config'

const title = 'About'

const CartPage = () => (
  <div className="s-body u-padding-top">
    <Helmet
      title={`${APP_NAME}: ${title}`}
      meta={[
        { name: 'description', content: '' },
        { property: 'og:title', content: `${APP_NAME}: ${title}` },
      ]}
    />
    <h1 className="u-h2">About the store</h1>
    <p>This online store is built using React, Redux and the <a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">Contentful</a> API, and is deployed to <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>. The store is a work in progress with the aim of exploring front end technologies. You can view the code repository and current issues on <a href="https://github.com/gethyn1/react-contenful-store" target="_blank" rel="noopener noreferrer">Github</a>.</p>
    <p>The store is built using the following technologies:</p>
    <ul>
      <li>React with ES6</li>
      <li><a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack 2.0</a></li>
      <li>Type checking with <a href="https://flow.org" target="_blank" rel="noopener noreferrer">Flow type</a></li>
      <li><a href="http://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a> and Redux dev tools</li>
      <li><a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">React router 4</a> with <em>_redirects</em> for deployment to Netlify</li>
      <li><a href="https://github.com/gaearon/react-hot-loader" target="_blank" rel="noopener noreferrer">React hot reloader</a></li>
      <li>SASS using CSS modules and a sort of ITCSS methodology</li>
      <li><a href="http://eslint.org/" target="_blank" rel="noopener noreferrer">ES Lint</a> (with AirBnB configuration)</li>
      <li>Testing with <a href="https://facebook.github.io/jest/" target="_blank" rel="noopener noreferrer">Jest</a> and <a href="https://github.com/airbnb/enzyme" target="_blank" rel="noopener noreferrer">Enzyme</a></li>
      <li><a href="https://github.com/typicode/husky" target="_blank" rel="noopener noreferrer">Husky</a> git hooks</li>
      <li><a href="https://github.com/nfl/react-helmet" target="_blank" rel="noopener noreferrer">React Helmet</a></li>
    </ul>
  </div>
)

export default CartPage
