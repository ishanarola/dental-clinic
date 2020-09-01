import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// import './tempDist/css/theme.css';
// import './plugins/fontawesome-free/css/all.min.css';
// import './plugins/icon-kit/dist/css/iconkit.min.css';
// import './plugins/ionicons/dist/css/ionicons.min.css';
// import './plugins/perfect-scrollbar/css/perfect-scrollbar.css';
// import './tempDist/js/theme.js'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase,{FirebaseContext} from './Firebase';
import store from './configStore';
ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
    <App store={store} />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
