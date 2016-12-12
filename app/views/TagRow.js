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

const tagStyle = {
  flex:1,
  marginLeft:20,
  marginRight:20,
  borderRadius: 10,
  overflow: 'hidden',
};

const TagRow = ({content, onPress}) => {
  const tagBackgroundColor = {backgroundColor: (content.inTodos || content.completed) ? 'orange' : '#00BFFF' };
  return (
    <View style={styles.tag_row}>
      <View style={Object.assign({}, tagStyle, tagBackgroundColor) }>
        <Text style={styles.text} onPress = {() => onPress(content)}>{content.name}</Text>
      </View>
    </View>
  );
};

export default TagRow;
