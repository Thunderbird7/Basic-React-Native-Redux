// this is a root reducer and root Selectors
import { combineReducers } from 'redux'
import login, * as fromLogin from './loginReducer'
import nav, * as fromNav from './navReducer'

export default combineReducers({
  nav,
  login,
})

export const getLogin = (state) =>
  fromLogin.getLogin(state.login)


// export const getToken = (state) => {
//   fromLogin.getToken(state.token)
// }

export const getNav = (state) => 
  fromNav.getNav(state.nav)
