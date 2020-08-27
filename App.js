/* eslint-disable max-len */

import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import List from './components/List';
import styles from './components/ListItem';


const App = () => {
  return (
    <View style={styles.container}>
      <List />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
