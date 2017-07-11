// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import Price from './Price'
import Ratio from './Ratio'
import Sticker from './Sticker'

import styles from '../styles/6-components/_components.product-item.scss'

type Props = {
  id: String,
  title: String,
  image: Object,
  price: number,
  reduction: number,
}

const ProductItem = ({ id, title, image, price, reduction }: Props) => (
  <div className={styles.root}>
    <Link to={`/product/${String(id)}`} className={styles.link}>
      {reduction > 0 &&
        <Sticker text="sale" className={styles.sticker} />}
      <div className={styles.image}>
        <Ratio>
          <img src={`${image.fields.file.url}?w=400&h=400&fit=thumb&f=center`} alt={image.fields.title} />
        </Ratio>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <Price price={price} reduction={reduction} />
    </Link>
  </div>
)

export default ProductItem
