import * as ApiUtil from '../util/api_util';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from './session_duck';

export const RECEIVE_DREAM = 'RECEIVE_DREAM';
export const RECEIVE_UPDATED_DREAM = 'RECEIVE_UPDATED_DREAM';
export const RECEIVE_QUERIED_DREAMS = 'RECEIVE_QUERIED_DREAMS';
export const RECEIVE_ALL_OTHER_DREAMS = 'RECEIVE_ALL_OTHER_DREAMS';

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

export const receiveAllOtherDreams = ({ dreams }) => ({
  type: RECEIVE_ALL_OTHER_DREAMS,
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

export const getAllOtherDreams = () => (dispatch) => {
  return ApiUtil.getOtherDreams().then(payload => dispatch(receiveAllOtherDreams(payload)));
};

export const dreamReducer = (oldState = { currentUserDreams: [], otherUserDreams: [] }, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_DREAM:
      const allDreams = oldState.currentUserDreams.slice(0).concat(action.dream);
      return Object.assign({}, oldState, { currentUserDreams: allDreams });
    case RECEIVE_UPDATED_DREAM:
      const currentDreams = oldState.currentUserDreams.slice(0);
      const updatedDreams = replaceDream(currentDreams, action.dream);
      return Object.assign({}, oldState, { currentUserDreams: updatedDreams });
    case RECEIVE_QUERIED_DREAMS:
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { currentUserDreams: action.dreams });
    case RECEIVE_ALL_OTHER_DREAMS:
      return Object.assign({}, oldState, { otherUserDreams: action.dreams });
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
