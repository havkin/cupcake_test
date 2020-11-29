import React from 'react';
import './Cart.css';

import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../CartItem/CartItem';
import { CartElement, Store } from '../types';
import { push } from 'connected-react-router';

const Cart: React.FC = () => {
  const cart: any = useSelector<Store>(({ cartReducer }) => cartReducer.cart);
  const dispatch = useDispatch();
  const sum = cart
    .reduce((acc: number, item: CartElement) => {
      const qnt = +item.qnt;
      const price = +item.price;
      return (acc = acc + qnt * price);
    }, 0)
    .toFixed(2);

  const itemArray = cart.map((item: CartElement) => {
    return <CartItem key={item.id} item={item} />;
  });

  return (
    <div>
      {cart.length === 0 ? <p className='empty-msg'>cart is empty</p> : <ol>{itemArray}</ol>}
      <footer className='cart-footer'>
        <button className='modal-close-btn' onClick={() => dispatch(push('/'))}>
          Back to catalog
        </button>
        <p className='cart-summa'>Total summa: ${sum}</p>
        <button className='cart-btn'>Buy</button>
      </footer>
    </div>
  );
};

export default Cart;
