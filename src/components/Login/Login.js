/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Login extends Component {

  constructor(props) {
    super(props)
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the login component</Text>
        <View style={styles.button}>
          <Text
            underlayColor='#ddd'
            onPress={this.props.fakeLogin}
            style={{color: 'white', fontWeight: 'bold'}}>
            {this.props.isLoggedIn ? 'Logout': 'Login' }
          </Text>
        </View>
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
    margin: 10,
    padding: 20,
    height: 40,
    backgroundColor: 'green',
  }
});
