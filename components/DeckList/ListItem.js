import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    paddingVertical: 20
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
  }
})

const ListItem = ({item}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.count}>{item.questions ? item.questions.length : 0} cards</Text>
  </View>
);

ListItem.propTypes = {
  item: PropTypes.object
}

export default ListItem;