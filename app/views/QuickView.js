import React from 'react'
import {
  StyleSheet,
  View,
  Text 
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});

const QuickView = () => {
  return(
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

export default QuickView;
