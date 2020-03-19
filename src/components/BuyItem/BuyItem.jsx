import React from 'react';
import './BuyItem.css';

import { push } from 'connected-react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addItemToCart } from '../../store/actions/cart_action';

class BuyItemModal extends React.Component {
   state = {
      counter: 1,
      qntInStock: 3,
   }

   incCounter = () => {
      this.setState({
         counter: this.state.counter + 1
      });
   }

   decCounter = () => {
      this.setState({
         counter: this.state.counter - 1
      });
   }

   addItem = (item) => {
      this.props.addItemToCart(item, this.state.counter);
   }

   isAvailable = () => this.state.counter <= this.state.qntInStock

   isInCart = (itemId) => this.props.cart.find(item => item.id === itemId)

   render() {
      const bookId = this.props.match.params.bookId;

      const book = this.props.catalog.find(item => item.isbn13 === bookId);

      return (
         <div className="modal-overlay">
            <div className="modal">
               <header className="modal-header">
                  <h3 className="modal-title">{book.title}</h3>
                  <button
                     className="modal-close-btn"
                     onClick={() => this.props.push('/')}
                  >Back to catalog</button>
               </header>

               <div className="modal-content">
                  <img
                     src={book.image}
                     alt="item image"
                  />
                  <div className="modal-content__info">
                     <p>{book.subtitle}</p>
                     <p className="modal-price">Price: ${book.price}</p>
                     <p>ISBN: {book.isbn13}</p>
                     <p>
                        <a href={book.url}>Extra info</a>
                     </p>
                  </div>
               </div>

                  { this.isInCart(book.isbn13)
                     ? <p className="in-cart-msg">Book in cart already</p>
                     :<footer className="modal-footer">
                        <div className="counter">
                           <button
                              disabled={this.state.counter === 1}
                              className="counter-btn"
                              onClick={this.decCounter}
                           >-</button>
                           <span className="counter-display">{this.state.counter}</span>
                           <button
                              className="counter-btn"
                              onClick={this.incCounter}
                           >+</button>
                        </div>
                        <button
                           disabled={!this.isAvailable()}
                           className="modal-add-btn"
                           onClick={() => this.addItem(book)}
                        >Add to cart</button>
                        <div
                           className={this.isAvailable() ? "no-warning-msg" : "warning-msg"}
                        >
                           No enough goods in stock
                        </div>
                     </footer>
                  }
            </div>
         </div>
      );
   }
}

const mapStateToProps = ({ catalogReducer, cartReducer }) => ({
   catalog: catalogReducer.catalog,
   cart: cartReducer.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addItemToCart, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BuyItemModal);