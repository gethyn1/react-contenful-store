// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'
import Ratio from './Ratio'

type Props = {
  id: String,
  title: String,
  image: Object,
  price: Number,
}

const ProductItem = ({ id, title, image, price }: Props) => (
  <div>
    <Link to={`/product/${String(id)}`}>
      <Ratio ratio="4:3">
        <img src={`${image.fields.file.url}?w=400&h=300&fit=thumb&f=top`} alt={image.fields.title} />
      </Ratio>
      <h2>{title}</h2>
    </Link>
    <p>&pound;{price}</p>
    <Button text="Buy now" />
  </div>
)

export default ProductItem
