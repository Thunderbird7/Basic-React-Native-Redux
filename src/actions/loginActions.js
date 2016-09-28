import * as actionTypes from '../constants/actionTypes'
import { getLogin, } from '../reducers'
import { Actions } from 'react-native-router-flux'

export function loginRequest () {
  return {
    type: actionTypes.LOGIN_REQUEST
  }
}

export function loginSuccess (token) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: { token, }
  }
}

export const fakeLogin = () => {
  return (dispatch, getState) => {

    const { isLoggedIn } = getLogin(getState())
    // if not login
    if (!isLoggedIn) {
      dispatch(loginRequest())

      setTimeout(() => {
        dispatch(loginSuccess('mytoken1234***'))
      }, 1000)
    }
  }
}
