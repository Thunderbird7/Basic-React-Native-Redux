// @flow
import { LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants/actionTypes'

const initialState = {
  isLoggedIn: false,
  onLoadding: false,
}

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        onLoadding: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        onLoadding: false,
        userToken: action.payload.token,
      }
    default:
      return state
  }
}

// Note:
// i have a selector here. because reducer is where you define how you login state
//
// Login Selectors (mapStateToProps)
export const getLogin = (state) => ({
  isLoggedIn: state.isLoggedIn,
  onLoadding: state.onLoadding,
  userToken: state.userToken,
})
// or another selector
// ....
