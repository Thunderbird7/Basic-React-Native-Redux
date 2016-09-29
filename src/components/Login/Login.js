/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default class Login extends Component {

  constructor(props) {
    super(props)
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{margin: 10, fontWeight: 'bold'}}>I'm the login component</Text>
        <Text style={{margin: 10}}>{!this.props.onLoadding ? 'Please press Login' : 'Attempt login...'}</Text>
        <TouchableHighlight onPress={this.props.fakeLogin} underlayColor='#ddd'>
          <View style={styles.button}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {this.props.isLoggedIn ? 'Logout': 'Login' }
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    margin: 0,
    padding: 20,
    height: 40,
    backgroundColor: 'green',
  }
});
