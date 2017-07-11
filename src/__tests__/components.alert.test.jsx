/* eslint-disable */
import React from 'react'
import { mount, shallow } from 'enzyme'

import Alert from '../components/Alert'

describe('Alert', () => {
  let props
  let mountedAlert

  const alertComponent = () => {
    if (!mountedAlert) {
      mountedAlert = mount(
        <Alert {...props} />,
      )
    }

    return mountedAlert
  }

  beforeEach(() => {
    props = {
      type: undefined,
      message: undefined,
    }

    mountedAlert = undefined
  })

  it('Doesn\'t render if message is unset', () => {
    const elements = alertComponent().find('*')
    expect(elements.length).toEqual(0)
  })

  describe('When `message` is defined', () => {
    beforeEach(() => {
      props.message = 'Test message'
    })

    it('displays an alert with the message', () => {
      const p = alertComponent().find('p').first()
      expect(p.text()).toEqual('Test message')
    })
  })
})
