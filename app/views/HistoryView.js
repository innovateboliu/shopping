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
const HistoryView= ({onTagPress, historyItems}) => {
  const dataSource = ds.cloneWithRows(historyItems);
  return(
      <ListView
        style={{flex:1, marginTop: 50}}
        dataSource={dataSource}
        renderRow={(data) => <TagRow content={data} onPress={onTagPress}/>}
      />
  );
};

export default HistoryView;
