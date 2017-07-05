// @flow

import {
  SET_ALERT,
  REMOVE_ALERT,
} from '../actions/alert'

export const initialState = {
  type: '',
  message: '',
}

export const alert = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        type: action.payload.type,
        message: action.payload.message,
      }
    case REMOVE_ALERT:
      return {
        type: '',
        message: '',
      }
    default:
      return state
  }
}
