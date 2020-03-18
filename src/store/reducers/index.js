import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import catalogReducer from './catalog_reducer';
import cartReducer from './cart_reducer';


export default (history) => combineReducers({
   router: connectRouter(history),
   catalogReducer,
   cartReducer,
   });