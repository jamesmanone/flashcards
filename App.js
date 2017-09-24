import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList';
import { Provider } from 'react-redux';
import store from './store';
import Views from './components/Views';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Views />
      </Provider>
    );
  }
}
