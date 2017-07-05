// @flow

export const SET_ALERT = 'SET_ALERT'
export const REMOVE_ALERT = 'REMOVE_ALERT'

export const alertSetAlert = (payload: Object) => ({
  type: SET_ALERT,
  payload,
})

export const alertRemoveAlert = (payload: ?Object) => ({
  type: REMOVE_ALERT,
  payload,
})
