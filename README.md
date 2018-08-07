[![Build Status](https://img.shields.io/travis/gethyn1/react-contenful-store.svg?style=flat-square)](https://travis-ci.org/gethyn1/react-contenful-store)

# React Store

An online store built with React, Redux and the Contentful API - designed to be deployed to Netlify. This is a work in progress. [View the deployed store online here](https://cashier-deer-87272.netlify.com/)

## Features

This project is built with:

- React (ES6)
- Webpack 2.0 [https://webpack.js.org/](https://webpack.js.org/)
- Flow type checking [https://flow.org](https://flow.org)
- Redux and Redux dev tools [http://redux.js.org/](http://redux.js.org/)
- React router v4 [https://reacttraining.com/react-router/](https://reacttraining.com/react-router/) with `_redirects` for deployment to Netlify
- React hot reloader [https://github.com/gaearon/react-hot-loader](https://github.com/gaearon/react-hot-loader)
- SASS using CSS modules and ITCSS
- ES Lint (with AirBnB configuration) [http://eslint.org/](http://eslint.org/)
- Testing with Jest and Enzyme [https://facebook.github.io/jest/](https://facebook.github.io/jest/), [https://github.com/airbnb/enzyme](https://github.com/airbnb/enzyme)
- Husky git hooks [https://github.com/typicode/husky](https://github.com/typicode/husky)
- React Helmet [https://github.com/nfl/react-helmet](https://github.com/nfl/react-helmet)

## Running the project

To start the project first install all dependencies with `yarn install`. Then make sure you have the JSON server running for the mock API with `yarn start:json`. Run the project using Webpack dev-server by running `yarn start`. To build the project for production run `yarn prod:build`. Linting and test the project with ES lint, Flow, Jest and Enzyme by running `yarn test`.
