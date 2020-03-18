import React from 'react';
import './BuyItem.css';

import { push } from 'connected-react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addItemToCart } from '../../store/actions/cart_action';

class BuyItemModal extends React.Component {
   state = {
      counter: 1,
   }

   incCounter = () => {
      this.setState ({
         counter: this.state.counter + 1
      });
   }

   decCounter = () => {
      this.setState ({
         counter: this.state.counter - 1
      });
   }

   addItem = (item) => {
      this.props.addItemToCart( item, this.state.counter );
   }

   render() {
      const bookId = this.props.match.params.bookId;

      const book = this.props.catalog.find( item => item.isbn13 === bookId );

      return (
         <div className="modal-overlay">
            <div className="modal">
               <header className="modal-header">
                  <h3 className="modal-title">{ book.title }</h3>
                  <button
                     className="modal-close-btn"
                     onClick={() => this.props.push('/') }
                  >Back to catalog</button>
               </header>

               <div className="modal-content">
                  <img 
                     src={ book.image }
                     alt="item image"
                  />
                  <div className="modal-content__info">
                     <p>{ book.subtitle }</p>
                     <p className="modal-price">Price: ${ book.price }</p>
                     <p>ISBN: { book.isbn13 }</p>
                     <p>
                         <a href={ book.url }>Extra info</a>
                     </p>
                  </div>
               </div>
               <footer className="modal-footer">
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
                     className="modal-add-btn"
                     onClick={() => this.addItem (book)}
                  >Add to cart</button>
               </footer>
            </div>
         </div>
      );
   }
}

const mapStateToProps = ({ catalogReducer, }) => ({
   catalog: catalogReducer.catalog,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addItemToCart, push }, dispatch);

export default connect( mapStateToProps, mapDispatchToProps )( BuyItemModal );