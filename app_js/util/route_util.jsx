import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter, Route } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => (
      loggedIn ? (
        <Redirect to="/dreams" />
      ) : (
        <Component {...props}></Component>
      )
    )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props}></Component>
    ) : (
      <Redirect to="/login"/>
    )
  )}/>
);

const msp = (state) => ({
  loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
