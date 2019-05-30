import * as ApiUtil from '../util/api_util';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from './session_duck';

export const RECEIVE_DREAM = 'RECEIVE_DREAM';
export const RECEIVE_UPDATED_DREAM = 'RECEIVE_UPDATED_DREAM';
export const RECEIVE_QUERIED_DREAMS = 'RECEIVE_QUERIED_DREAMS';

export const receiveDream = (dream) => ({
  type: RECEIVE_DREAM,
  dream
});

export const receiveUpdatedDream = (dream) => ({
  type: RECEIVE_UPDATED_DREAM,
  dream
});

export const receiveQueriedDreams = ({ dreams }) => ({
  type: RECEIVE_QUERIED_DREAMS,
  dreams
});

export const createDream = (dream) => (dispatch) => {
  return ApiUtil.createDream(dream).then(payload => dispatch(receiveDream(payload)));
};

export const updateDream = (dream) => (dispatch) => {
  return ApiUtil.updateDream(dream).then(payload => dispatch(receiveUpdatedDream(payload)));
};

export const queryDreams = (query) => (dispatch) => {
  return ApiUtil.queryDreams(query).then(payload => dispatch(receiveQueriedDreams(payload)));
};

export const dreamReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_DREAM:
      const allDreams = oldState.slice(0).concat(action.dream);
      return allDreams;
    case RECEIVE_UPDATED_DREAM:
      const currentDreams = oldState.slice(0);
      const updatedDreams = replaceDream(currentDreams, action.dream);
      return updatedDreams;
    case RECEIVE_QUERIED_DREAMS:
    case RECEIVE_CURRENT_USER:
      return action.dreams;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};


const replaceDream = (olderDreams, newDream) => {
  const dreamIdx = olderDreams.find(dream => dream.id === newDream.id);
  olderDreams.splice(dreamIdx, 1, newDream);
  return olderDreams;
};
