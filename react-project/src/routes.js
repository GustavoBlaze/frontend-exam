import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './components/Route';

import Loading from './components/Loading';

const longLazyImportPage = (pageName) =>
  React.lazy(() =>
    Promise.all([
      import(`./pages/${pageName}`),
      new Promise((resolve) => setTimeout(resolve, 3000)),
    ]).then(([module]) => module),
  );

const Login = longLazyImportPage('Login');
const Trailers = longLazyImportPage('Trailers');

const Routes = () => (
  <Switch>
    <React.Suspense fallback={<Loading />}>
      <Route path="/" exact component={Login} />
      <Route path="/trailers" component={Trailers} isPrivate />
    </React.Suspense>
  </Switch>
);

export default Routes;
