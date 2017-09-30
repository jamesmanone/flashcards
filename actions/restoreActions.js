import { AsyncStorage } from 'react-native';
import * as types from './';

export const restoreState = () => async dispatch => {
  let state = {};
  let keys;
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch(e) {
    keys = [];
  }
  while(keys && keys.length) {
    const item = await AsyncStorage.getItem(keys.pop());
    const nextKey = JSON.parse(item);
    if(nextKey && nextKey.title) state[nextKey.title] = nextKey;
  }
  dispatch({type: types.RESTORE_ASYNC_STATE, payload: state});
}
