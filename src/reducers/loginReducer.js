import * as actionTypes from '../constants/actionTypes'

const initialState = {
  isLoggedIn: false
}

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userToken: action.payload.token
      }
    default:
      return state
  }
}

// Login Selectors (mapStateToProps)
export const getLogin = (state) => ({
  isLoggedIn: state.isLoggedIn
})
// export const getLogin = ({ isLoggedIn }) => ({
//   isLoggedIn
// })

// or another selector
export const getToken = (state) => ({
  userToken: state.userToken
})
