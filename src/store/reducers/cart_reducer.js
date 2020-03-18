import update from 'immutability-helper';

import {
   ADD_ITEM
} from '../actions/cart_action';

const initialStore = {
   cart: [
      {
         title:  "Learning C++ by Building Games with Unreal Engine 4, 2nd Edition",
         price: "44.99",
         qnt: 2,
      }
   ]
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