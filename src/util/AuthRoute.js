import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// parenthesis immediately return result
const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === true ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

export default AuthRoute;
