// @flow
// action creators

import { LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants/actionTypes'
import { getLogin, } from '../reducers'
import { Actions } from 'react-native-router-flux'

export function loginRequest () {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess (token) {
  return {
    type: LOGIN_SUCCESS,
    payload: { token, }
  }
}

export const fakeLogin = () => {
  return (dispatch, getState) => {

    // check login from current state
    // getLogin() selector from root reducer
    const { isLoggedIn } = getLogin(getState())
    // if not login
    if (!isLoggedIn) {
      dispatch(loginRequest())
      // authentication logic ....
      //
      setTimeout(() => {
        // if login success
        dispatch(loginSuccess('mytoken1234***'))
      }, 5000)
    }
  }
}
