import update from 'immutability-helper';

import {
   ADD_ITEM,
   DEL_ITEM,
   UPD_ITEM,
} from '../actions/cart_action';

const initialStore = {
   cart: [
      {
         title:  "Learning C++ by Building Games with Unreal Engine 4, 2nd Edition",
         price: "44.99",
         id: "9781788476249",
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
                     id: action.item.isbn13,
                     qnt: action.qnt,
                  }
               ] 
               
            }
         });
      }
      case DEL_ITEM: {
         const index = store.cart.findIndex( item => item.id === action.itemId);
         return update(store, {
            cart: {
               $splice:[
                  [index, 1]
               ] 
               
            }
         });
      }
      case UPD_ITEM: {
         const index = store.cart.findIndex( item => item.id === action.itemId);
         return update(store, {
            cart: { [index]: {qnt: {$set: action.qnt}}
            }
         });
      }
      default:
         return store;
   }
}