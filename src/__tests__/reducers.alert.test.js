/* eslint-disable */
import { initialState, alert } from '../reducers/alert'

import {
  SET_ALERT,
  REMOVE_ALERT,
} from '../actions/alert'

const setAlertTestState = Object.assign({}, initialState, {
  type: 'info',
  message: 'Test message',
})

describe('Alert reducer', () => {
  it('should return the initial state', () => {
    expect(alert(undefined, {})).toEqual(initialState)
  })

  it(`should handle ${SET_ALERT}`, () => {
    expect(
      alert(initialState, {
        type: SET_ALERT,
        payload: {
          type: 'info',
          message: 'Test message',
        },
      }),
    )
    .toEqual(setAlertTestState)
  })

  it(`should handle ${REMOVE_ALERT}`, () => {
    expect(
      alert(initialState, {
        type: REMOVE_ALERT,
        payload: {},
      }),
    )
    .toEqual(initialState)
  })
})
