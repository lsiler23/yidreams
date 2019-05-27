import * as ApiUtil from '../util/api_util';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from './session_duck';

export const RECEIVE_DREAM = 'RECEIVE_DREAM';

export const receiveDream = (dream) => ({
  type: RECEIVE_DREAM,
  dream
});

export const createDream = (dream) => (dispatch) => {
  return ApiUtil.createDream(dream).then(payload => dispatch(receiveDream(payload)));
};

export const dreamReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_DREAM:
      const updatedDreams = oldState.slice(0).concat(action.dream);
      return updatedDreams;
    case RECEIVE_CURRENT_USER:
      return action.dreams;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};
