import update from 'immutability-helper';

import { ADD_CATALOG } from '../actions/catalog_action';

const initialStore = {
   catalog: [

   ]
};

export default function catalogReducer( store = initialStore, action ) {

   switch (action.type) {
      case ADD_CATALOG: {
         return update(store, {
            catalog: {$set: action.data}
         });
      }
      default:
         return store;
   }
}