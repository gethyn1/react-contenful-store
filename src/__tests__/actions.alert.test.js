import {
  SET_ALERT,
  REMOVE_ALERT,
  alertSetAlert,
  alertRemoveAlert,
} from '../actions/alert'

const alert = { type: 'info', message: 'Test message' }

describe('Alert actions', () => {
  it('should create an action to set an alert', () => {
    const expectedAction = {
      type: SET_ALERT,
      payload: alert,
    }

    expect(alertSetAlert(alert)).toEqual(expectedAction)
  })

  it('should create an action to remove alert', () => {
    const expectedAction = {
      type: REMOVE_ALERT,
      payload: {},
    }

    expect(alertRemoveAlert({})).toEqual(expectedAction)
  })
})
