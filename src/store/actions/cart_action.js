export const ADD_ITEM = '@@cart/ADD_ITEM';

export const addItemToCart = (item, qnt) => ({
   type: ADD_ITEM,
   item,
   qnt
});

export const DEL_ITEM = '@@cart/DEL_ITEM';

export const delItemFromCart = (itemId) => ({
   type: DEL_ITEM,
   itemId,
});

export const UPD_ITEM = '@@cart/UPD_ITEM';

export const updItemQnt = (itemId, qnt) => ({
   type: UPD_ITEM,
   itemId,
   qnt,
});