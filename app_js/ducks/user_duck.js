import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from './session_duck';

export const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.user.id]: action.user });
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};
