// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'

type Props = {
  id: String,
  title: String,
  image: Object,
  price: Number,
}

const ProductItem = ({ id, title, image, price }: Props) => (
  <div>
    <Link to={`/product/${String(id)}`}>
      <h2>{title}</h2>
      <img src={`${image.fields.file.url}?w=200&h=200&fit=thumb&f=top`} alt={image.fields.title} />
    </Link>
    <p>&pound;{price}</p>
    <Button text="Buy now" />
  </div>
)

export default ProductItem
