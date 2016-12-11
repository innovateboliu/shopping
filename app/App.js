import React from 'react'
import {
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

const App = () => {
  return (
		<Router>
			<Scene key='quick_view' tabs={true}>
				<Scene key='a' component={TodoList} hideNavBar={true} dataSource={dataSource} icon={TabIcon} title='Todo List' initial={true}/>
				<Scene key='b' component={QuickView} icon={TabIcon} title='Backlog' />
			</Scene>
			<Scene key='menu' direction='vertical' hideNavBar={true} component={Menu}/>

		</Router>
  )
}

export default App
