import React from 'react'
import {
  View,
  Text,
} from 'react-native';
import { Component } from 'react';
import {Actions} from 'react-native-router-flux'

const ItemUpdateModal =({deleteItem, id}) => {

    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{height:50, fontSize:30}} onPress={() => {deleteItem(id); Actions.pop()}}>Delete</Text>
      </View>
    );
};
export default ItemUpdateModal;
