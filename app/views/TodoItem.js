import React from 'react';
import CheckBox from 'react-native-checkbox';

import {
  ListView,
  View,
  Text 
} from 'react-native';

const TodoItem = ({data}) => {
  return(
    <View style={{flex: 1, height:50}}>
      <CheckBox
        label={data}
        checked={true}
        onChange={(checked) => console.log('I am checked', checked)}
      />
    </View>
  );
};

export default TodoItem;
