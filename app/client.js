import React from 'react';
import App from './components/App';
import { hydrate } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import createStore from '../redux/store';
import { Provider } from 'react-redux';
import { ActionCreator } from '../redux/reducer';
 
const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(state);
store.dispatch(ActionCreator.loadQuestions());

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
