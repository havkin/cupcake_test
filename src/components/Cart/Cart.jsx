import React from 'react';
import './Cart.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { push } from 'connected-react-router';

import CartItem from '../CartItem/CartItem.jsx';

class Cart extends React.Component {


   render() {

      const sum = this.props.cart.reduce( (acc, item) => {
         const qnt = +item.qnt;
         const price = +item.price;
         return acc = acc + ( qnt * price );
      }, 0).toFixed(2);

      const itemArray = this.props.cart.map(item => {
         return (
            <CartItem
               key={item.id}
               item={item}
            />
         );
      });

      return (
         <div>
            {this.props.cart.length === 0
               ? <p className="empty-msg">cart is empty</p>
               : <ol>{itemArray}</ol>
            }
            <footer className="cart-footer">
               <button
                  className="modal-close-btn"
                  onClick={() => this.props.push('/')}
               >
                  Back to catalog
               </button>
               <p className="cart-summa">Total summa: ${sum}</p>
               <button className="cart-btn">Buy</button>
            </footer>
         </div>
      );
   }
}

const mapStateToProps = ({ cartReducer, }) => ({
   cart: cartReducer.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps,  mapDispatchToProps)(Cart);