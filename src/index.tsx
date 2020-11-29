import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import initStore, { history } from './store/store';

import { ConnectedRouter } from 'connected-react-router';
import Router from './router/Router';

import Header from './components/Header/Header';

ReactDom.render(
  <Provider store={initStore()}>
    <ConnectedRouter history={history}>
      <Header />
      <Router />
    </ConnectedRouter>
  </Provider>,

  document.getElementById('app')
);
