import React from 'react'
import {
  View,
  Text 
} from 'react-native';

const TabIcon = (props) => {
  return(
    <View>
      <Text style={{ color: props.selected ? 'red' : 'black' }}>
        {props.title}
      </Text>
    </View>
  );
};

export default TabIcon;
