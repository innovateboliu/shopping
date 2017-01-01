import React from 'react'

import { Component } from 'react';
import {
	Linking,
	PushNotificationIOS,
	AlertIOS,
  StyleSheet,
  ListView
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { SideMenu } from 'react-native-side-menu';

import History from './containers/History';
import WelcomeView from './views/WelcomeView';
import Menu from './views/Menu';
import LoginModal from './views/LoginModal';
import ItemUpdate from './containers/ItemUpdate';
import TabIcon from './views/TabIcon';
import TodoList from './containers/TodoList';
import shoppingApp from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FCM from 'react-native-fcm';

const initialState = {
  items: [
    {id: 'apple', name: 'Apple'},
    {id: 'pear', name: 'Pear'}
  ],
}

let store = createStore(shoppingApp, initialState);

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.rowId !== r2.rowId});
const dataSource = ds.cloneWithRows([
  'Apple',
  'Milk',
  'Egg'
])

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

export default class App extends Component {
  componentWillUnmount() {
		this.refreshUnsubscribe();
		this.notificationUnsubscribe();
	}
  componentDidMount() {
		//Linking.addEventListener('url', this._processURL);
		FCM.requestPermissions(); // for iOS
		FCM.getFCMToken().then(token => {
			console.log("token  is " + token)
	
			AlertIOS.alert(
				'token',
				'Alert token: ' + token,
				[{
					text: 'Dismiss',
					onPress: null,
				}]
			);
			// store fcm token in your server
		});
		FCM.subscribeToTopic('/topics/test');
		FCM.on('notification', (notif) => {
			console.log("$$$$$$$$$$ received notification " + JSON.stringify(notif));
			if (notif.local_notification) {
				AlertIOS.alert(
					'local message',
					'recevied : ' + notif.body,
					[{
						text: 'Dismiss',
						onPress: null,
					}]
				);
			} else {
				AlertIOS.alert(
					'Remote message',
					'recevied : ' + JSON.stringify(notif.aps),
					[{
						text: 'Dismiss',
						onPress: null,
					}]
				);
			}
			// there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
			if(notif.local_notification){
				//this is a local notification
			}
			if(notif.opened_from_tray){
				//app is open/resumed because user clicked banner
			}
		});
	}
	_processURL(e) {
    var url = e.url.replace('boshoppingapp://', '').split('?');
    var path = url[0];
    var params = url[1] ? qs.parse(url[1]) : null;
    
    console.log(path, params);
    // do something here based on `path` and `params`
  }
	notificationUnsubscribe() {
		FCM.on('notification', (notif) => {
			console.log("$$$$$$$$$$ received notification " + JSON.stringify(notif));
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
		FCM.presentLocalNotification({
			id: "UNIQ_ID_STRING",                               // (optional for instant notification)
			title: "My Notification Title",                     // as FCM payload
			body: "My Notification Message",                    // as FCM payload (required)
			sound: "default",                                   // as FCM payload
			priority: "high",                                   // as FCM payload
			click_action: "ACTION",                             // as FCM payload
			badge: 10,                                          // as FCM payload IOS only, set 0 to clear badges
			icon: "ic_launcher",                                // as FCM payload, you can relace this with custom icon you put in mipmap
			my_custom_data:'my_custom_field_value',             // extra data you want to throw
			lights: true,                                       // Android only, LED blinking (default false)
			show_in_foreground: true                                  // notification when app is in foreground (local & remote)
     });
		//PushNotification.localNotification({
		//	/* iOS and Android properties */
		//	title: "My Notification Title", // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
		//	message: "My Notification Message", // (required)
		//	playSound: false, // (optional) default: true
		//	soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
		//	number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
		//	repeatType: 'day', // (Android only) Repeating interval. Could be one of `week`, `day`, `hour`, `minute, `time`. If specified as time, it should be accompanied by one more parameter 'repeatTime` which should the number of milliseconds between each interval
		//	actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
		//});
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
			<Provider store={store}>
				<Router>
					<Scene key='welcome_page' component={WelcomeView} hideNavBar initial/>
					<Scene
						key='quick_view'
						tabs={true}
						tabBarStyle={styles.tabBarStyle}
					>
						<Scene key='todo_view' component={TodoList} hideNavBar={true} dataSource={dataSource} icon={TabIcon} title='Task' />
						<Scene key='history_view' component={History} icon={TabIcon} title='History' hideNavBar/>
						<Scene key='login_view' component={LoginModal} icon={TabIcon} title='User' hideNavBar/>
					</Scene>
					<Scene key='menu' direction='vertical' hideNavBar={true} component={Menu}/>
					<Scene key='login_modal' hideNavBar={true} component={LoginModal}  />
					<Scene key='item_update_modal' direction='vertical' hideNavBar={true} component={ItemUpdate}/>

				</Router>
			</Provider>
		)
	}
}
