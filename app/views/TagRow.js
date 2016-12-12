import React from 'react'
import {
  StyleSheet,
  View,
  Text 
} from 'react-native';

const styles = StyleSheet.create({
  tag_row: {
    flex:1,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  tag: {
    flex:1,
    marginLeft:20,
    marginRight:20,
    backgroundColor: '#00BFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:8,
    paddingRight:8,
    color: 'white',
  }
});

const TagRow = ({contents, onPress}) => {
  return (
    <View style={styles.tag_row}>
      <View style={styles.tag}>
        <Text style={styles.text} onPress = {() => onPress(contents[0])}>{contents[0].name}</Text>
      </View>
      <View style={styles.tag}>
        <Text style={styles.text} onPress = {() => onPress(contents[1])}>{contents[1].name}</Text>
      </View>
      <View style={styles.tag}>
        <Text style={styles.text} onPress = {() => onPress(contents[2])}>{contents[2].name}</Text>
      </View>
    </View>
  );
};

export default TagRow;
