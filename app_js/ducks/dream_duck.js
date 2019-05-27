import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from './session_duck';

export const dreamReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, action.dreams);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};
