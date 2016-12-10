import React from 'react';

import {
  ListView,
  View,
  Text 
} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({dataSource}) => {
  return(
    <View
      style={{flex: 1, marginTop:70, marginLeft:30, marginRight: 30}}
    >
      <ListView
        dataSource={dataSource}
        renderRow={(data) => <TodoItem data={data}/>}
      />
    </View>
  );
};

export default TodoList;
