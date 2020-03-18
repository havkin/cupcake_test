import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import catalogReducer from './catalog_reducer';


export default (history) => combineReducers({
   router: connectRouter(history),
   catalogReducer,
   });