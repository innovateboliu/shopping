import React from 'react'
import {
  StyleSheet,
  ListView
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { SideMenu } from 'react-native-side-menu';

import QuickView from './views/QuickView';
import Menu from './views/Menu';
import TabIcon from './views/TabIcon';
import TodoList from './views/TodoList';

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

const App = () => {
  return (
		<Router>
			<Scene
        key='quick_view'
        tabs={true}
        tabBarStyle={styles.tabBarStyle}
      >
				<Scene key='a' component={TodoList} hideNavBar={true} dataSource={dataSource} icon={TabIcon} title='Task' initial={true}/>
				<Scene key='b' component={QuickView} icon={TabIcon} title='History' hideNavBar/>
			</Scene>
			<Scene key='menu' direction='vertical' hideNavBar={true} component={Menu}/>

		</Router>
  )
}

export default App
