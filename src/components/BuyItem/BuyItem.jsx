import React, { useEffect, useState } from 'react';
import './BuyItem.css';

import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/actions/cart_action';

const BuyItemModal = props => {
  const dispatch = useDispatch();
  const qntInStock = 3;

  const [counter, setCounter] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const cart = useSelector(({ cartReducer }) => cartReducer.cart);
  const catalog = useSelector(({ catalogReducer }) => catalogReducer.catalog);

  const incCounter = () => {
    setCounter(prev => prev + 1);
  };

  const decCounter = () => {
    setCounter(prev => prev - 1);
  };

  const addItem = item => {
    dispatch(addItemToCart(item, counter));
    props.history.push('/');
  };

  const isAvailable = () => counter <= qntInStock;

  const bookId = props.match.params.bookId;

  useEffect(() => {
    if (cart.find(item => item.id === bookId)) {
      setIsInCart(true);
    }
  });

  const book = catalog.find(item => item.isbn13 === bookId);

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <header className='modal-header'>
          <h3 className='modal-title'>{book.title}</h3>
          <button className='modal-close-btn' onClick={() => props.history.push('/')}>
            Back to catalog
          </button>
        </header>

        <div className='modal-content'>
          <img src={book.image} alt='item image' />
          <div className='modal-content__info'>
            <p>{book.subtitle}</p>
            <p className='modal-price'>Price: ${book.price}</p>
            <p>ISBN: {book.isbn13}</p>
            <p>
              <a href={book.url}>Extra info</a>
            </p>
          </div>
        </div>

        {isInCart ? (
          <p className='in-cart-msg'>Book in cart already</p>
        ) 
        : (
          <footer className='modal-footer'>
            <div className='counter'>
              <button disabled={counter === 1} className='counter-btn' onClick={decCounter}>
                -
              </button>
              <span className='counter-display'>{counter}</span>
              <button className='counter-btn' onClick={incCounter}>
                +
              </button>
            </div>
            <button disabled={!isAvailable()} className='modal-add-btn' onClick={() => addItem(book)}>
              Add to cart
            </button>
            <div className={isAvailable() ? 'no-warning-msg' : 'warning-msg'}>No enough goods in stock</div>
          </footer>
        )}
      </div>
    </div>
  );
};

export default BuyItemModal;
