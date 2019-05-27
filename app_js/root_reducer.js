import { combineReducers } from 'redux';

import { sessionReducer } from './ducks/session_duck';
import { usersReducer } from './ducks/user_duck';
import { dreamReducer } from './ducks/dream_duck'

export const rootReducer = combineReducers({
  session: sessionReducer,
  users: usersReducer,
  dreams: dreamReducer
});
