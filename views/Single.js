import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = ({route}) => {
  const{file} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{file.title}</Text>
      <View style={styles.imagebox}>
        <Image
          style={styles.image}
          source={{uri: mediaUrl + file.filename}}
        />
        <Text style={styles.description}>{file.description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  description: {
    padding: 15,
  },
});

Single.propTypes = {
 route: PropTypes.object,
}

export default Single;
