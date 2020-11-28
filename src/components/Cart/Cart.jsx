import React from 'react';
import './Cart.css';

import { useSelector } from 'react-redux';

import CartItem from '../CartItem/CartItem';

const cart = (props) => {
  const cart = useSelector(({ cartReducer }) => cartReducer.cart);
  const sum = cart
    .reduce((acc, item) => {
      const qnt = +item.qnt;
      const price = +item.price;
      return (acc = acc + qnt * price);
    }, 0)
    .toFixed(2);

  const itemArray = cart.map(item => {
    return <CartItem key={item.id} item={item} />;
  });

  return (
    <div>
      {cart.length === 0 ? <p className='empty-msg'>cart is empty</p> : <ol>{itemArray}</ol>}
      <footer className='cart-footer'>
        <button 
        className='modal-close-btn' 
        onClick={() => props.history.push('/')}
        >
          Back to catalog
        </button>
        <p className='cart-summa'>Total summa: ${sum}</p>
        <button className='cart-btn'>Buy</button>
      </footer>
    </div>
  );
};

export default cart;
