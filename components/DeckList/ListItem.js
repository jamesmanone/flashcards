import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    paddingVertical: 0,
    borderStyle: 'solid',
    borderBottomWidth: 4
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  count: {
    textAlign: 'center',
    fontSize: 14,
    color: '#999'
  },
  button: {
    width: 400,
    margin: 0,
    paddingVertical: 20
  }
})

const ListItem = ({item, nav}) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={nav}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.count}>{item.questions.length} {item.questions.length === 1 ? 'card' : 'cards'}</Text>
    </TouchableOpacity>
  </View>
);

ListItem.propTypes = {
  item: PropTypes.object
}

export default ListItem;
