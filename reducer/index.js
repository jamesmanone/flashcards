import * as types from '../actions';

/*
 * the store is shaped as such:
 * {
 *   _restored: hasLoadedFromAsyncStorage ? true : false,
 *   (foreach deck)
 *   [deckTitle]: {title: deckTitle, questions: [...questions]},
 * }
 */

export default (state={}, action) => {
  switch(action.type) {
    case types.RESTORE_ASYNC_STATE:
      return {...action.payload, _restored: true};
    case types.ADD_DECK:
      return {
        ...state,
        [action.payload.title]: action.payload
      };
    case types.DELETE_DECK:
      let newState = {...state};
      delete newState[action.payload];
      return newState;
    case types.ADD_CARD:
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions: [
            ...state[action.deck].questions,
            action.payload
          ]
        }
      };
    case types.DELETE_CARD:
    return {
      ...state,
      [action.payload.deck]: {
        ...state[action.payload.deck],
        questions: state[action.payload.deck].questions
                      .filter(i => i.id !== action.payload.id)
      }
    };
    default:
      return state;
  }
};
