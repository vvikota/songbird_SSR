import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './template';
import App from './components/App';
import createStore from '../redux/store';
import { Provider } from 'react-redux';
// import { StaticRouter } from 'react-router-dom';


export default function render(req, res) {
  const store = createStore();

  const appString = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  res.send(template({
    body: appString,
    title: 'Songbird_SSR',
    store: store,
  }));
}
