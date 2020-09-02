import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';
import {AuthContext} from '../contexts/AuthContext';

const Login = (navigation) => { // props is needed for navigation
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext)
  console.log('Login', isLoggedIn);
  const logIn = () => {
    setIsLoggedIn(true);
    if (isLoggedIn) {
    navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Sign in!" onPress={logIn}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
