/* eslint-disable max-len */

import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  View,
} from 'react-native';
import List from '../components/List';
import styles from '../components/ListItem';

const Home = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <List navigation={navigation}/>
      <StatusBar style="auto" />
    </View>
  );
};

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
export default Home;
