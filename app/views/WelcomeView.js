import React, { Component } from 'react';
import {
  View,
  Text 
} from 'react-native';
import {
  AccessToken
} from 'react-native-fbsdk';
import {Actions} from 'react-native-router-flux';

export default class WelcomeView extends Component {
  componentDidMount() {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        if (!data) {
          Actions.login_modal();
        } else {
          Actions.quick_view();
        }
      }
    );

  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center',  alignItems:'center'}}>
        <Text>Welcome</Text>
      </View>
    );
  }

};
