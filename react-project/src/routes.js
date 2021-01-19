import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from './pages/Loading';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Loading} />
  </Switch>
);

export default Routes;
