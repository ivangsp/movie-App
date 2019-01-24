import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore, {history} from './configureStore'
import App from './App';


const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
      <App history={history} />
  </Provider>,
  document.getElementById('root')
)
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import './index.css';
// import * as serviceWorker from './serviceWorker';
// import history from './history';
// import store from './configureStore';
// import App from './App';


// ReactDOM.render(
//     <Provider  store={store}>
//       <App history={history} />
//     </Provider>,
//     document.getElementById('root')
//     );
    
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();