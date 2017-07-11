// @flow

import React from 'react'

import ProductItem from './ProductItem'
import { Layout, LayoutItem } from './Layout'

type Props = {
  products: Array<Object>,
  isLoading?: boolean,
  hasErrored?: boolean,
  fetchData: Function,
}

class ProductList extends React.Component {
  static defaultProps: Object

  componentDidMount() {
    this.props.fetchData()
  }

  props: Props
  renderProductStatus: Function
  renderProductView: Function

  renderProductStatus() {
    if (this.props.isLoading) {
      return <p>Loading products ...</p>
    }

    if (this.props.hasErrored) {
      return <p>Sorry, there was an error loading the products.</p>
    }

    return null
  }

  renderProductView() {
    const { products, isLoading, hasErrored } = this.props

    const productItems = products.map((product) => {
      const { productTitle, productImage, price, reduction } = product.fields
      const id = product.sys.id

      return (
        <LayoutItem cols="1/3@tablet" key={id}>
          <div className="u-margin-bottom-lg">
            <ProductItem
              id={id}
              title={productTitle}
              image={productImage}
              price={price}
              reduction={reduction}
            />
          </div>
        </LayoutItem>
      )
    })

    if (!hasErrored && !isLoading) {
      if (products.length) {
        return (
          <Layout size="sm">
            {productItems}
          </Layout>
        )
      }

      return <p>Sorry, there are no products to display.</p>
    }

    return null
  }

  render() {
    return (
      <div>
        {this.renderProductView()}
        {this.renderProductStatus()}
      </div>
    )
  }
}

ProductList.defaultProps = {
  products: [],
  isLoading: false,
  hasErrored: false,
  fetchData: () => {},
}

export default ProductList
