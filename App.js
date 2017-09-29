import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeckList from './components/DeckList';
import { Provider } from 'react-redux';
import store from './store';
import Views from './components/Views';
import baseStyle from './baseStyles';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Views />
      </Provider>
    );
  }
}
