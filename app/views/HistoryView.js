import React from 'react'
import {
  StyleSheet,
  View,
  ListView,
  Text 
} from 'react-native';
import TagRow from './TagRow';
import { addTodo } from '../actions';
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.rowId !== r2.rowId});
const dataSource = ds.cloneWithRows([
  [{id: 0, name: 'Apple'}, {id: 1, name: 'Milk'},{id: 2, name: 'Egg'}],
  [{id: 3, name: 'Pear'}, {id: 4, name: 'Cabbage'},{id: 5, name: 'Meat'}],
])

const HistoryView= () => {
  const _onPress = (data) => {
    dispatch(addTodo(data));
  }
  return(
      <ListView
        style={{flex:1, marginTop: 50}}
        dataSource={dataSource}
        renderRow={(data) => <TagRow contents={data} onPress={_onPress}/>}
      />
  );
};

export default HistoryView;
