// @flow

import React from 'react'

import Container from './Container'

import styles from '../styles/6-components/_components.banner.scss'

type Props = {
  images: Object,
  children: React.Element<*>,
}

const Banner = ({ images, children }: Props) => (
  <div className={styles.root}>
    <div className={styles['image-wrapper']}>
      <picture>
        <source media="(min-width: 500px)" srcSet={images.large} />
        <source srcSet={images.small} />
        <img className={styles.image} src={images.small} alt="" />
      </picture>
    </div>
    <div className={styles.content}>
      <Container>
        <div className={styles['content-wrap']}>
          {children}
        </div>
      </Container>
    </div>
  </div>
)

export default Banner
