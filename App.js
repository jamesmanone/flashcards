import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Views from './components/Views';
import { setNotification, clearNotification } from './utils';

export default class App extends Component {
  componentDidMount() {
    clearNotification();
    setNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <Views />
      </Provider>
    );
  }
}
