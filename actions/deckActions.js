import { AsyncStorage, Alert } from 'react-native';
import * as types from './'

export const addDeck = title => async dispatch => {
  let newDeck = {
    title,
    questions: []
  };
  try {
    await AsyncStorage.setItem(title, JSON.stringify(newDeck));
    dispatch({type: types.ADD_DECK, payload: newDeck});
  } catch(e) {
    Alert.alert('Something went wrong 😕');
    console.log(e);
  }
};

export const deleteDeck = title => async dispatch => {
  try {
    await AsyncStorage.removeItem(title);
    dispatch({type: types.DELETE_DECK, payload: title});
  } catch(e) {
    Alert.alert('Something went wrong 😕');
  }
};
