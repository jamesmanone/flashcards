import { AsyncStorage, Alert } from 'react-native';
import * as types from './';

export const addDeck = (title, onSuccess) => async dispatch => {
  if(!title) return;
  let newDeck = {
    title,
    questions: []
  };
  try {
    await AsyncStorage.setItem(title, JSON.stringify(newDeck));
    dispatch({type: types.ADD_DECK, payload: newDeck});
    if(onSuccess) onSuccess();
  } catch(e) {
    Alert.alert('Something went wrong 😕');
    console.log(e);
  }
};
