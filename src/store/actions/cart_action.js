export const ADD_ITEM = '@@cart/ADD_ITEM';

export const addItemToCart = (item, qnt) => ({
   type: ADD_ITEM,
   item,
   qnt
});