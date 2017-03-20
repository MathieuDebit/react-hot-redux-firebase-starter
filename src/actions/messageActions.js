import firebaseApi from '../api/firebase';
import * as types from './actionTypes';

export function sendMessage(message) {
  message.author = firebaseApi.currentUser().email;

  return (dispatch) => {
    return firebaseApi.databasePush('messages', message)
      .then(() => dispatch(listenMessagesUpdates()) );
  };
}

export function fetchMessages() {
  return (dispatch) => {
    return firebaseApi.fetchDatabase('messages', 10)
      .then((items) => dispatch(messagesFetchSuccess(items.val())) );
  };
}

export function listenMessagesUpdates() {
  return (dispatch) => {
    return firebaseApi.listenDatabase('messages', (snapshot) => {
      const message = {
        [snapshot.getKey()]: snapshot.val()
      };

      dispatch(messagesFetchSuccess(message));
    });
  };
}

export function messagesFetchSuccess(messages) {
  return {
    type: types.MESSAGES_FETCH_SUCCESS, messages
  };
}
