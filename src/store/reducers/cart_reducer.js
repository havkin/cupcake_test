import update from 'immutability-helper';

import {
   ADD_ITEM
} from '../actions/cart_action';

const initialStore = {
   cart: []
};

export default function cartReducer(store = initialStore, action) {
   switch (action.type) {
      case ADD_ITEM: {
         return update(store, {
            cart: {
               $push:[
                  {
                     title: action.item.title,
                     price: action.item.price,
                     qnt: action.qnt,
                  }
               ] 
               
            }
         });
      }
      default:
         return store;
   }
}