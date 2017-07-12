// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import Flag from './Flag'
import ListBare from './ListBare'
import Icon from './Icon'

/* eslint-disable no-unused-vars */
import searchIcon from '../images/icons/search.svg'
import closeIcon from '../images/icons/close.svg'
/* eslint-enable no-unused-vars */

import styles from '../styles/6-components/_components.search.scss'

type Props = {
  isVisible: boolean,
  isLoading: boolean,
  hasErrored: boolean,
  noResults: boolean,
  results: Array<Object>,
  searchTermUpdate: Function,
  clearResults: Function,
  toggleSearch: Function,
}

const Search = ({
  isVisible,
  isLoading,
  hasErrored,
  noResults,
  results,
  searchTermUpdate,
  clearResults,
  toggleSearch,
}: Props) => {
  const handleChange = (event: Event & { target: HTMLInputElement }) => {
    const term = event.target.value

    if (term.length >= 3) {
      searchTermUpdate(term)
    } else {
      clearResults()
    }
  }

  const handleToggle = (event: & { currentTarget: HTMLElement }) => {
    if (event.target === event.currentTarget) {
      toggleSearch(!isVisible)
    }
  }

  const handleNavigation = () => {
    toggleSearch(!isVisible)
  }

  const statusText = () => {
    if (noResults) {
      return <div className={styles.status}><span>No results</span></div>
    }

    if (isLoading) {
      return <div className={styles.status}><span>Loading results ...</span></div>
    }

    if (hasErrored) {
      return <div className={styles.status}><span>There was an error with your search</span></div>
    }

    return null
  }

  return (
    <div>
      <button onClick={handleToggle} className={styles.icon}>
        <Icon type="search" size="32" />
      </button>
      {isVisible &&
        <div role="button" tabIndex={0} className={styles.overlay} onClick={handleToggle}>
          <div className={styles.wrap}>
            <button onClick={handleToggle} className={styles.close}>
              <Icon type="close" size="20" />
            </button>
            <h2 className="u-h2 u-text-center">Search the store</h2>
            <input className={styles.input} type="text" onChange={handleChange} placeholder="What are you looking for&hellip;" />
            {results.length > 0 &&
              <ListBare className={styles.list}>
                {results.map((result) => {
                  const { productImage, productTitle } = result.fields
                  const id = result.sys.id

                  return (
                    // eslint-disable-next-line
                    <li role="button" tabIndex={0} key={id} className={styles.item} onClick={handleNavigation}>
                      <Flag src={`${productImage.fields.file.url}?w=80&h=80&fit=thumb&f=center`}>
                        <h3 className="u-h3">
                          <Link to={`/product/${id}`}>{productTitle}</Link>
                        </h3>
                      </Flag>
                    </li>
                  )
                })}
              </ListBare>
            }
            {statusText()}
          </div>
        </div>}
    </div>
  )
}

export default Search
