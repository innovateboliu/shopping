import React from 'react'
import {
  ListView
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import QuickView from './views/QuickView';
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
        <Scene key='a' component={TodoList} dataSource={dataSource} icon={TabIcon} title='Todo List' initial={true}/>
        <Scene key='b' component={QuickView} icon={TabIcon} title='Backlog' />
      </Scene>
    </Router>
  )
}

export default App
