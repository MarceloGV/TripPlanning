import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import tripsAppReducers from './TripPlanningCore/src/reducers';
const store =  createStore(tripsAppReducers);

ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
