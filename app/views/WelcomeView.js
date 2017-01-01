import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Text 
} from 'react-native';
import {
  AccessToken
} from 'react-native-fbsdk';
import {Actions} from 'react-native-router-flux';

export default class WelcomeView extends Component {
  async printStorage() {
    console.log(await AsyncStorage.getItem('bo'));
  }
  componentDidMount() {
    this.printStorage();
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
