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

const TagRow = ({contents}) => {
  return (
    <View style={styles.tag_row}>
      <View style={styles.tag}>
        <Text style={styles.text}>{contents[0]}</Text>
      </View>
      <View style={styles.tag}>
        <Text style={styles.text}>{contents[1]}</Text>
      </View>
      <View style={styles.tag}>
        <Text style={styles.text}>{contents[2]}</Text>
      </View>
    </View>
  );
};

export default TagRow;
