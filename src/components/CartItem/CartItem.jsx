import React from 'react';
import './CartItem.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { delItemFromCart, updItemQnt } from '../../store/actions/cart_action';

class CartItem extends React.Component {

   removeItem = id => {
      this.props.delItemFromCart(id);
   }

   incQnt = (qnt, id) => {
      this.props.updItemQnt (id, ++qnt);
   }

   decQnt = (qnt, id) => {
      this.props.updItemQnt (id, --qnt);
   }

   render() {

      const price = +this.props.item.price;
      const qnt = +this.props.item.qnt;
      const id = this.props.item.id;

      return (
         <li className="cart-item">
            <h4>{this.props.item.title}</h4>
            <div className="cart-item__price">${price} </div>
               <div className="counter">
                  <button
                     disabled={ qnt === 1}
                     className="counter-btn"
                     onClick={() => this.decQnt( qnt, id )}
                  >-</button>
                  <span className="counter-display">{ qnt }</span>
                  <button
                     className="counter-btn"
                     onClick={ () => this.incQnt( qnt, id )}
                  >+</button>
               </div>
            <div className="cart-item__total">Total ${price * qnt}</div>
            <button
               className="cart-item__remove-btn"
               onClick={() => this.removeItem( id )}
            >Remove</button>
         </li>
      );
   }
}

const mapStateToProps = ({ cartReducer, }) => ({
   cart: cartReducer.cart,

});

const mapDispatchToProps = dispatch => bindActionCreators({ delItemFromCart, updItemQnt }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);