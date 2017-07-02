// @flow

import React from 'react'

import Button from './Button'

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
    }, 1)
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

    const {
      productTitle,
      productImage,
      productDescription,
    } = product.fields

    return (
      <div>
        <h2>{productTitle}</h2>
        <img src={`${productImage.fields.file.url}?w=300&h=300&fit=thumb&f=top`} alt={productImage.fields.title} />
        <p>{productDescription}</p>
        <Button text="Add to cart" onClick={this.onAddItemToCart} />
      </div>
    )
  }
}

export default Product
