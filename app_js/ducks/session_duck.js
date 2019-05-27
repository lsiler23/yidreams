import * as SessionUtil from '../util/session_util';

// constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
// export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
// export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// actions
export const receiveCurrentUser = ({ user, dreams }) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
    dreams
  }
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

// export const receiveErrors = (errors) => ({
//   type: RECEIVE_ERRORS,
//   errors
// });
//
// export const clearErrors = () => ({ type: CLEAR_ERRORS });

// thunks
export const login = (user) => (dispatch, getState) => {
  return SessionUtil.login(user).then(payload => dispatch(receiveCurrentUser(payload)));
};

export const logout = () => {
  return (dispatch) => {
    return SessionUtil.logout()
    .then(payload => dispatch(logoutCurrentUser()));
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionUtil.signup(user)
    .then(
      payload => dispatch(receiveCurrentUser(payload)),
      payload => dispatch(receiveErrors(payload.responseJSON.errors))
    );
  };
};

// reducer
export const sessionReducer = (oldState = { currentUser: null }, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { currentUser: action.user });
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, oldState, { currentUser: null });
    default:
      return oldState;
  }
};
