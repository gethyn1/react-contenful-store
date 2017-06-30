// @flow

import React from 'react'

type Props = {
  isLoading: boolean,
  hasErrored: boolean,
  productId: String,
  product: Object,
  fetchProduct: Function,
  addItemToCart: Function,
}

class Product extends React.Component {
  constructor(props: Props) {
    super(props)

    this.onAddItemToCart = this.onAddItemToCart.bind(this)
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.productId)
  }

  onAddItemToCart() {
    this.props.addItemToCart({
      id: this.props.productId,
      title: this.props.product.fields.productTitle,
      quantity: 1,
    })
  }

  onAddItemToCart: Function
  props: Props

  render() {
    const {
      isLoading,
      hasErrored,
      product,
    } = this.props

    if (isLoading || !product) {
      return <p>Loading product ...</p>
    }

    if (hasErrored) {
      return <p>There was an error</p>
    }

    return (
      <div>
        <h2>{product.fields.productTitle}</h2>
        <img src={product.fields.productImage} alt="test" />
        <p>{product.fields.productDescription}</p>
        <button onClick={this.onAddItemToCart}>Add to cart</button>
      </div>
    )
  }
}

export default Product
