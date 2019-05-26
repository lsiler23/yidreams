import axios from 'axios';

export const signup = (user) => (
  $.ajax({ method: 'post', url: '/users', data: { user } });
);

export const login = (user) => (
  $.ajax({ method: 'post', url: '/session', data: { user } });
);

export const logout = () => (
  $.ajax({ url: '/session', method: 'delete' });
);
