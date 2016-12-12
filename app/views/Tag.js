import React from 'react'
import {
  StyleSheet,
  View,
  Text 
} from 'react-native';

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#00BFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    fontSize: 20,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:8,
    paddingRight:8,
    color: 'white',
  }
});

const Tag = ({content}) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

export default Tag;
