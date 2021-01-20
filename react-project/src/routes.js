import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
// import Loading from './components/Loading';

// const longLazyImportPage = (pageName) =>
//   React.lazy(() =>
//     Promise.all([
//       import(`./pages/${pageName}`),
//       new Promise((resolve) => setTimeout(resolve, 3000)),
//     ]).then(([module]) => module),
//   );

// const Login = longLazyImportPage('Login');

const Routes = () => (
  <Switch>
    {/* <React.Suspense fallback={<Loading />}> */}
    <Route path="/" exact component={Login} />
    {/* </React.Suspense> */}
  </Switch>
);

export default Routes;
