import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SessionForm from './session_form';
import { login } from '../../ducks/session_duck';

export default withRouter(
  connect((state) => ({ type: 'Log In'}), { login })(SessionForm)
);
