import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from './pages/Loading';
import Login from './pages/Login';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Loading} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
