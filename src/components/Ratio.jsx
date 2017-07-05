// @flow

import React from 'react'

import styles from '../styles/5-objects/_objects.ratio.scss'

type Props = {
  children: React.Element<*>,
  ratio?: string,
}

// Test if a React children element is a single image
const isSingleImage = (el: Object) => {
  const str = 'picture,img'
  return !Array.isArray(el) && str.indexOf(el.type) > -1
}

// Add extra classes to a React children object by returning
// a cloned React element
export const addClassList = (el: Object, classList: string) => {
  const newClassList = `${el.props.className} ${classList}`

  return React.cloneElement(el, { className: newClassList })
}

const Ratio = ({ children, ratio }: Props) => {
  const contentClass = 'o-ratio__content'

  const ratioContent = isSingleImage(children) ?
    addClassList(children, contentClass) : <div className={styles[contentClass]}>{children}</div>

  const ratioArr = ratio ? ratio.split(':') : [1, 1]
  const ratioPadding = (parseInt(ratioArr[1], 10) / parseInt(ratioArr[0], 10)) * 100
  const ratioStyles = {
    paddingBottom: `${ratioPadding}%`,
  }

  return (
    <div className={styles['o-ratio']} style={ratioStyles}>
      {ratioContent}
    </div>
  )
}

Ratio.defaultProps = {
  ratio: '1:1',
}

export default Ratio
