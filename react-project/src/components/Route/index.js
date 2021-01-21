import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from '../../hooks/useAuth';

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { authenticated } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        isPrivate === !!authenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/trailers',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

Route.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.element.isRequired,
};

export default Route;
