import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';


const ListItem = (props) => {
  return (
  <TouchableOpacity>
    <View style={styles.cats}>
      <Image
        style={{width: 100, height: 100}}
        source={{uri: props.singleMedia.thumbnails.w160}}
      />
    </View>

    <View style={styles.text}>
      <Text>{props.singleMedia.title}</Text>
      <Text>{props.singleMedia.description}</Text>
    </View>

  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cats: {
    padding: 10,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    flex:1,
  },
  text: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
}

export default ListItem
