import { createStore, compose } from 'redux';
import initialReducers from './reducers';

export default function initStore() {
   let initialStore = {};

   return createStore(
      initialReducers,
      initialStore,
      compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},));
}