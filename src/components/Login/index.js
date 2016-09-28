// @flow
// Container for Login Page
import Login from './Login'
import { connect } from 'react-redux'
import * as loginActions from '../../actions/loginActions'
import { getNav, getLogin, } from '../../reducers'

const mapStateToProps = (state) => ({
  ...getLogin(state),
  // ...getToken(state),
  ...getNav(state),
})

export default connect(
  mapStateToProps,
  loginActions
)(Login)
