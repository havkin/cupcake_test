import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import initialReducers from './reducers';

export const history = createBrowserHistory();

const devTools = () => {
   return (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : () => {}
}

export default function initStore() {
   let initialStore = {};

   return createStore(
      initialReducers(history),
      initialStore,
      compose(
         applyMiddleware(routerMiddleware(history)),
         devTools(),
      ));
}