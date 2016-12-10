import React from 'react';

import {
  ListView,
  View,
  Text 
} from 'react-native';

const TodoItem = ({data}) => {
  return(
    <View style={{flex: 1, height:30}}>
      <Text>{data}</Text>
    </View>
  );
};

export default TodoItem;
