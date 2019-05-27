import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;

  if (window.currentUser) {
    const { user } = window.currentUser;
    preloadedState = {
      session: {
        currentUser: user
      },
      users: {
        [user.id]: user
      }
    };

    delete window.currentUser;
  } else {
    preloadedState = {};
  }

  const store = configureStore(preloadedState);

  window.getState = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root)
});
