import React from 'react';
import history from './history';
import  {Router,Route} from 'react-router-dom';
import {SIGN_IN} from './Components/Constants/routes';
import {withAuthentication} from './Session';
import Login from './Components/AuthComponents/Login';
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/" component={Login}/>
        <Route path={SIGN_IN} component={Login}/>
        </Router>
    </div>
  );
}

export default withAuthentication(App);
