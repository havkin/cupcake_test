import React from 'react';
import './Cart.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CartItem from '../CartItem/CartItem.jsx';

class Cart extends React.Component {


   render () {

      const itemArray = this.props.cart.map( item => {
         return (
            <CartItem
               key={ item.id }
               item={ item }
            />
         );
      });

      return (
         <div>
            { this.props.cart.length === 0
            ? <p className="empty-msg">cart is empty</p>
            : <ol>{ itemArray }</ol>
            }
         </div>
      );
   }
}

const mapStateToProps = ({ cartReducer, }) => ({
   cart: cartReducer.cart,

});

export default connect( mapStateToProps,)( Cart );