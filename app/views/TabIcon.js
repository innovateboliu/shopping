import React from 'react'
import {
  View,
  Text 
} from 'react-native';

const TabIcon = (props) => {
  return(
    <View>
      <Text style={{ fontSize:20, color: props.selected ? 'orange' : 'grey' }}>
        {props.title}
      </Text>
    </View>
  );
};

export default TabIcon;
