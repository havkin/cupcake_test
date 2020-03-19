import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import initialReducers from './reducers';

export const history = createBrowserHistory();

export default function initStore() {
   let initialStore = {};

   return createStore(
      initialReducers(history),
      initialStore,
      compose(
         applyMiddleware(routerMiddleware(history)),
         // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
      ));
}