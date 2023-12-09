// PrivateRoute: Check user is already Authenticated and Authorize to allow go to need step

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, userRole, allowedRoles, redirectTo, ...rest }) => {
  const shouldRender = isAuthenticated && (!allowedRoles || allowedRoles.includes(userRole));

  return (
    <Route
      {...rest}
      render={(props) =>
        shouldRender ? <Component {...props} /> : <Redirect to={redirectTo || '/sign-in'} />
      }
    />
  );
};

export default PrivateRoute;
