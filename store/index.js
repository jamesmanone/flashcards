import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import reducer from '../reducer';


export default createStore(reducer, {_restored: false}, applyMiddleware(thunk));
