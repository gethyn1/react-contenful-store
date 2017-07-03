import React from 'react'
import { mount } from 'enzyme'

import ItemQuantity from '../components/ItemQuantity'

describe('ItemQuantity', () => {
  let props
  let mountedItemQuantity

  const itemQuantity = () => {
    if (!mountedItemQuantity) {
      mountedItemQuantity = mount(
        <ItemQuantity {...props} />,
      )
    }

    return mountedItemQuantity
  }

  beforeEach(() => {
    props = {
      quantity: undefined,
      onIncrease: undefined,
      onDecrease: undefined,
      onChange: undefined,
    }

    mountedItemQuantity = undefined
  })

  it('Always renders a containing div', () => {
    const divs = itemQuantity().find('div')
    expect(divs.length).toBeGreaterThan(0)
  })

  it('Always renders a number input', () => {
    const input = itemQuantity().find('input')
    expect(input.length).toBe(1)
  })

  it('Always renders two buttons', () => {
    const buttons = itemQuantity().find('button')
    expect(buttons.length).toBe(2)
  })

  describe('When `quantity` is defined', () => {
    beforeEach(() => {
      props.quantity = 1
      props.onChange = () => {}
    })

    it('displays the correct value in the input', () => {
      const input = itemQuantity().find('input')
      expect(input.props().value).toEqual(1)
    })
  })

  describe('When `onIncrease` and `onDecrease` is defined', () => {
    let testValue = 0

    beforeEach(() => {
      props.onIncrease = () => { testValue = 3 }
      props.onDecrease = () => { testValue = 1 }
    })

    it('triggers `onIncrease` when clicking + button', () => {
      const increase = itemQuantity().find('.increase')
      increase.simulate('click')
      expect(testValue).toBe(3)
    })

    it('triggers `onDecrease` when clicking - button', () => {
      const increase = itemQuantity().find('.decrease')
      increase.simulate('click')
      expect(testValue).toBe(1)
    })
  })
})
