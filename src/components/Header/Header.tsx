import React from 'react';
import './Header.css';

import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../types';
import { push } from 'connected-react-router'

const Header: React.FC = () => {
  const cart: any = useSelector<Store>(({ cartReducer }) => cartReducer.cart);
  const dispatch = useDispatch();

  return (
    <div className='header'>
      <h1 onClick={() => dispatch(push('/'))}>Cupcake Books</h1>
      <button className='cart-btn' onClick={() => dispatch(push('/cart'))}>
        <p>Cart</p>
        <div className='cart-btn__info'>{cart.length}</div>
      </button>
    </div>
  );
};

export default Header;
