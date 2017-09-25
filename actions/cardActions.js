import { AsyncStorage, Alert } from 'react-native';
import store from '../store';
import * as types from './';

export const addCard = deckName => card => async dispatch => {
  try {
    const deck = store.getState()[deckName];
    const newDeck = {...deck, questions:[...deck.questions, card]};
    await AsyncStorage.setItem(deckName, JSON.stringify(newDeck));
    dispatch({type: types.ADD_CARD, payload: card, deck: deckName});
  } catch(e) {
    Alert.alert('Something went wrong 😕');
  }
};
