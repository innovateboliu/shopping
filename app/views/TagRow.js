import React from 'react'
import {Actions} from 'react-native-router-flux';
import {
  TouchableWithoutFeedback,
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

const TagRow = ({content, onPress, deleteItem}) => {
  const tagBackgroundColor = {backgroundColor: content.tapped ? 'orange' : '#00BFFF' };
  const onLongPress = () => Actions.item_update_modal({id: content.id})
    
  return (
    <View style={styles.tag_row}>
      <TouchableWithoutFeedback
        onLongPress={onLongPress}
         onPress = {() => onPress(content)}
      >
        <View style={Object.assign({}, tagStyle, tagBackgroundColor) }>
          <Text style={styles.text}>{content.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TagRow;
