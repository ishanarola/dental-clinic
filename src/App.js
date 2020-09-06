import React, { useEffect } from 'react';
import history from './history';
import { Switch, Router, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { withAuthentication } from './Session';
import { Provider } from 'react-redux';
// import postscribe from "postscribe";
import * as ROUTE from './Components/Constants/routes';
import Login from './Components/AuthComponents/Login';
import Home from './Components/Home';

// let script =
//   '<script src="./plugins/popper.js/dist/umd/popper.min.js" type="text/javascript"></script>' +
//   '<script src="./plugins/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>' +
//   '<script src="./plugins/perfect-scrollbar/dist/perfect-scrollbar.min.js" type="text/javascript"></script>' +
//   '<script src="./plugins/screenfull/dist/screenfull.js" type="text/javascript"></script>' +
//   '<script src="./tempDist/js/theme.js" type="text/javascript"></script>';
function App(props) {
  useEffect(() => {
    // postscribe("#root", script); 
  })
  return (
    <Provider store={props.store}>
      {/* <ScriptTag type="text/javascript" src="./theme.js" /> */}
      <CookiesProvider>
        <Router history={history}>
          <Switch>
            <Route path={ROUTE.LANDING} component={Home} />
            <Route exact path={ROUTE.SIGN_IN} component={Login} />
          </Switch>
        </Router>
      </CookiesProvider>
    </Provider>
  );
}

export default withAuthentication(App);
