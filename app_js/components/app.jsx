import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionForm from './session_form';

const App = () => (
  <div>
    <Route path="/login" loggedIn={false} component={SessionForm} />
    <Route path="/signup" loggedIn={false} component={<h1>signup</h1>} />
    <ProtectedRoute path='/dreams' component={<h1>DREAMZs</h1>} />
  </div>
);

export default App;
