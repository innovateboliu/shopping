import React from 'react'
import FCM from 'react-native-fcm';
import {Actions} from 'react-native-router-flux';
import {
	PushNotificationIOS,
	AlertIOS,
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
var PushNotification = require('react-native-push-notification');


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
  componentWillUnmount() {
		this.refreshUnsubscribe();
		this.notificationUnsubscribe();
	}
  componentDidMount() {
		FCM.requestPermissions(); // for iOS
		FCM.getFCMToken().then(token => {
			console.log(token)
			// store fcm token in your server
		});
	}
	notificationUnsubscribe() {
		FCM.on('notification', (notif) => {
			// there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
			if(notif.local_notification){
				//this is a local notification
			}
			if(notif.opened_from_tray){
				//app is open/resumed because user clicked banner
			}
		});
	}
  refreshUnsubscribe() {
		FCM.on('refreshToken', (token) => {
			console.log(token)
			// fcm token may not be available on first load, catch it here
		});	
	}

  _onRegistered(deviceToken) {
    AlertIOS.alert(
      'Registered For Remote Push',
      `Device Token: ${deviceToken}`,
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  _onRegistrationError(error) {
    AlertIOS.alert(
      'Failed To Register For Remote Push',
      `Error (${error.code}): ${error.message}`,
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  _onRemoteNotification(notification) {
    console.log(notification);
    AlertIOS.alert(
      'Push Notification Received',
      'Alert message: ' + JSON.stringify(notification) + ', ' + notification.getData(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  _onLocalNotification(notification){
    console.log(notification);
    AlertIOS.alert(
      'Local Notification Received hello',
      'Alert message: ' + JSON.stringify(notification) + ', ' + notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  _sendLocalNotification() {
		PushNotification.localNotification({
			/* iOS and Android properties */
			title: "My Notification Title", // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
			message: "My Notification Message", // (required)
			playSound: false, // (optional) default: true
			soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
			number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
			repeatType: 'day', // (Android only) Repeating interval. Could be one of `week`, `day`, `hour`, `minute, `time`. If specified as time, it should be accompanied by one more parameter 'repeatTime` which should the number of milliseconds between each interval
			actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
		});
    //require('RCTDeviceEventEmitter').emit('localNotificationReceived', {
    //  aps: {
    //    alert: 'Sample notification',
    //    'content-available': 1,
    //    badge: '+1',
    //    sound: 'default',
    //    category: 'REACT_NATIVE'
    //  },
    //});
  }

  _sendRemoteNotification() {
    require('RCTDeviceEventEmitter').emit('remoteNotificationReceived', {
      aps: {
        alert: 'Sample notification',
        'content-available': 1,
        badge: '+1',
        sound: 'default',
        category: 'REACT_NATIVE'
      },
    });
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
				<TouchableHighlight
					underlayColor={'white'}
					onPress={this._sendLocalNotification}>
					<Text>
						send local notification
					</Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'white'}
					onPress={this._sendRemoteNotification}>
					<Text>
						send remote notification
					</Text>
				</TouchableHighlight>
      </View>
    );
  }
};
