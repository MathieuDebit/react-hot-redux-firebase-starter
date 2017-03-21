import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function messagesReducer(state = initialState.messages, action) {
  switch (action.type) {
    case types.MESSAGES_FETCH_SUCCESS:
      return {...state, ...action.messages};
    default:
      return state;
  }
}
