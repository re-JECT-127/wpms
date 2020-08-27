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
  <TouchableOpacity style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{uri: props.singleMedia.thumbnails.w160}}
      />
    </View>
    <View style={styles.textview}>
    <Text style={styles.title}>{props.singleMedia.title}</Text>
    <Text style={styles.description}>{props.singleMedia.description}</Text>
    </View>

  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flexDirection: "row",
    padding: 15,
    marginBottom: 5,
    borderRadius: 10,
  },
  cats: {
    padding: 10,
    backgroundColor: 'lightgreen',
    flexDirection: 'row',
    flex: 1,
  },
  topic: {
    fontSize: 30,
  },
  text: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 10,
  },
  image2: {
    flex: 1,
  },
  textview: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 1,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
}

export default ListItem
