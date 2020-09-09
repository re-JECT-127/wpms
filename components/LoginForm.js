import React, {useContext} from 'react';
import {
  Button,
  Text,
  Form,
} from 'native-base';
import PropTypes from 'prop-types';
import {AuthContext} from '../contexts/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import {postLogIn} from '../hooks/APIhooks';
import FormTextInput from './FormTextInput';
import useLoginForm from '../hooks/LoginHooks';

const LoginForm = ({navigation}) => {
  const {setIsLoggedIn} = useContext(AuthContext);

  const doLogin = async () => {
    try {
      const userData = await postLogIn(inputs);
      console.log('user login success:', userData.user);
      setIsLoggedIn(true);
      await AsyncStorage.setItem('userToken', userData.token);
    } catch (e) {
      console.log('login error', e.message);
    }
    // navigation.navigate('Home');
  };

  const {handleInputChange, inputs} = useLoginForm();

  return (
    <Form>
      <FormTextInput
        autoCapitalize="none"
        placeholder="username"
        onChangeText={(txt) => handleInputChange('username', txt)}
      />
      <FormTextInput
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(txt) => handleInputChange('password', txt)}
        secureTextEntry={true}
      />
      <Button block onPress={doLogin}>
        <Text>Login!</Text>
      </Button>
    </Form>
  );
};

LoginForm.propTypes = {
  navigation: PropTypes.object,
};

export default LoginForm;
