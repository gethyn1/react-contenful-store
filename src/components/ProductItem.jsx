// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import Ratio from './Ratio'

import styles from '../styles/6-components/_components.product-item.scss'

type Props = {
  id: String,
  title: String,
  image: Object,
  price: Number,
}

const ProductItem = ({ id, title, image, price }: Props) => (
  <div className={styles.root}>
    <Link to={`/product/${String(id)}`} className={styles.link}>
      <div className={styles.image}>
        <Ratio ratio="4:3">
          <img src={`${image.fields.file.url}?w=400&h=300&fit=thumb&f=top`} alt={image.fields.title} />
        </Ratio>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p>&pound;{price}</p>
    </Link>
  </div>
)

export default ProductItem
