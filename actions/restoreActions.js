import { AsyncStorage } from 'react-native';
import * as types from './';

export const restoreState = () => async dispatch => {
  let state = {};
  const keys = await AsyncStorage.getAllKeys();
  while(keys.length) {
    const item = await AsyncStorage.getItem(keys.pop());
    const nextKey = JSON.parse(item);
    if(nextKey.title) state[nextKey.title] = nextKey;
  }
  console.log(state);
  dispatch({type: types.RESTORE_ASYNC_STATE, payload: state});
}
