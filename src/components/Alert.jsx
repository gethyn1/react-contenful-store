// @flow

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import styles from '../styles/6-components/_components.alert.scss'

type Props = {
  type: string,
  message: string,
}

const Alert = ({ type, message }: Props) => {
  if (message) {
    return (
      <ReactCSSTransitionGroup
        transitionName="slide-down"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div key="1" className={`${styles.root} ${styles[type]}`}>
          <p className={styles.message}>{message}</p>
        </div>
      </ReactCSSTransitionGroup>
    )
  }

  return null
}

export default Alert
