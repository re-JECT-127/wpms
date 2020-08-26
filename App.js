/* eslint-disable max-len */

import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import List from './components/List';


const App = () => {
  return (
    <View style={styles.container}>
      <List></List>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 37,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cats: {
    padding: 10,
    backgroundColor: 'grey',
    flexDirection: 'row',
  },
  topic: {
    fontSize: 30,
  },
  text: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    alignSelf: 'center',
  },
});

export default App;
