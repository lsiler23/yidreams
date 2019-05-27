import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginContainer from './session/login_container';

const App = () => (
  <div>
    <AuthRoute path="/login" loggedIn={false} component={LoginContainer} />
    <AuthRoute path="/signup" loggedIn={false} component={<h1>signup</h1>} />
    <ProtectedRoute path='/dreams' component={<h1>DREAMZs</h1>} />
  </div>
);

export default App;
