/* @flow */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import configureStore from './store/configureStore'
import Login from './components/Login'
import Main from './components/Main'

const store = configureStore()
const RouterWithRedux = connect()(Router)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='login' title='Login Page' component={Login}/>
          <Scene key='main' title='Main Page' component={Main}/>
        </RouterWithRedux>
      </Provider>
    )
  }
}
