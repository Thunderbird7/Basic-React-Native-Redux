// @flow
// this is a root reducer and root Selectors
import { combineReducers } from 'redux'
import login, * as fromLogin from './loginReducer'
import nav, * as fromNav from './navReducer'

export default combineReducers({
  nav,
  login,
})

export const getNav = (state) =>
  fromNav.getNav(state.nav)

export const getLogin = (state) =>
  fromLogin.getLogin(state.login)



//
// Note:
// that because I created a wrapper for my selectors because this allows them to not know about
// the root structure of the state (ie. state.nav and state.login).
// If I change my line 9 from login to signin, then all I have to do is change line 16 from state.
// login to state.signin. This allows me to create a wrapper for all my reducers therefore any other class that needs
// to import selector will only have to import rootReducer.
