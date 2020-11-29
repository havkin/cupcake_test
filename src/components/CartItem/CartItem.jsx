import React from 'react';
import './CartItem.css';

import { useDispatch } from 'react-redux';

import { delItemFromCart, updItemQnt } from '../../store/actions/cart_action';

const CartItem = props => {
  const dispatch = useDispatch();
  const qntInStock = 3;

  const price = +props.item.price;
  const qnt = +props.item.qnt;
  const id = props.item.id;

  const removeItem = id => {
    dispatch(delItemFromCart(id));
  };

  const incQnt = (qnt, id) => {
    dispatch(updItemQnt(id, ++qnt));
  };

  const decQnt = (qnt, id) => {
    dispatch(updItemQnt(id, --qnt));
  };

  const isAvailable = () => props.item.qnt <= qntInStock;

  return (
    <li className='cart-item'>
      <h4>{props.item.title}</h4>
      <div className='cart-item__price'>${price} </div>
      <div className='counter'>
        <button disabled={qnt === 1} className='counter-btn' onClick={() => decQnt(qnt, id)}>
          -
        </button>
        <span className='counter-display'>{qnt}</span>
        <button className='counter-btn' onClick={() => incQnt(qnt, id)}>
          +
        </button>
        <div className={isAvailable() ? 'no-warning-msg' : 'warning-msg'}>No enough goods in stock</div>
      </div>
      <div className='cart-item__total'>Total ${(price * qnt).toFixed(2)}</div>
      <button className='cart-item__remove-btn' onClick={() => removeItem(id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;
