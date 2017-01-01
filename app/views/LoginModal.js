import React from 'react'
import {Actions} from 'react-native-router-flux';
import {
	TouchableHighlight,
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';
import { Component } from 'react';
import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';


const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

export default class LoginModal extends Component {
  componentWillMount() {
    //PushNotificationIOS.addEventListener('register', this._onRegistered);
    //PushNotificationIOS.addEventListener('registrationError', this._onRegistrationError);
    //PushNotificationIOS.addEventListener('notification', this._onRemoteNotification);
    //PushNotificationIOS.addEventListener('localNotification', this._onLocalNotification);

    //PushNotificationIOS.requestPermissions();
		//PushNotification.configure({

		//	// (optional) Called when Token is generated (iOS and Android)
		//	onRegister: function(token) {
		//			console.log( 'TOKEN:', token );
		//	},

		//	// (required) Called when a remote or local notification is opened or received
		//	onNotification: function(notification) {
		//			console.log( 'NOTIFICATION:', notification );
		//		AlertIOS.alert(
		//			'Push Notification Received',
		//			'Alert message: ' + notification.message,
		//			[{
		//				text: 'Dismiss',
		//				onPress: null,
		//			}]
		//		);
		//	},

		//	// ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications) 
		//	senderID: "YOUR GCM SENDER ID",

		//	// IOS ONLY (optional): default: all - Permissions to register.
		//	permissions: {
		//			alert: true,
		//			badge: true,
		//			sound: true
		//	},

		//	// Should the initial notification be popped automatically
		//	// default: true
		//	popInitialNotification: true,

		//	/**
		//		* (optional) default: true
		//		* - Specified if permissions (ios) and token (android and ios) will requested or not,
		//		* - if not, you must call PushNotificationsHandler.requestPermissions() later
		//		*/
		//	requestPermissions: true,
		//});
  }

  render() {
    return (
		  <View
        style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
      >
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    Actions.quick_view();
                  }
                )
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert('logged out')}
        />
      </View>
    );
  }
};
