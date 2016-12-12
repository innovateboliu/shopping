import React from 'react'
import {
  StyleSheet,
  View,
  ListView,
  Text 
} from 'react-native';
import TagRow from './TagRow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.rowId !== r2.rowId});
const dataSource = ds.cloneWithRows([
  ['Apple', 'Milk','Egg'],
  ['Pear', 'Cabbage','Meat'],
])

const QuickView = () => {
  return(
      <ListView
        style={{flex:1, marginTop: 50}}
        dataSource={dataSource}
        renderRow={(data) => <TagRow contents={data}/>}
      />
  );
};

export default QuickView;
