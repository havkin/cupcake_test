import React from 'react';
import './CartItem.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { delItemFromCart } from '../../store/actions/cart_action';

class CartItem extends React.Component {

   removeItem = id => {
      this.props.delItemFromCart( id );
   }

   render () {
      const price = +this.props.item.price;
      const qnt = +this.props.item.qnt;
      return (
         <li className="cart-item">
            <h4>{ this.props.item.title }</h4>
            <div className="cart-item__price">${ price } </div>
            <div className="cart-item__qnt">{ qnt }</div>
            <div className="cart-item__total">Total ${ price * qnt }</div>
            <button 
               className="cart-item__remove-btn"
               onClick={() => this.removeItem(this.props.item.id)}
            >Remove</button>
         </li>
      );
   }
}

// const mapStateToProps = ({ catalogReducer, }) => ({
//    catalog: catalogReducer.catalog,

// });

const mapDispatchToProps = dispatch => bindActionCreators({ delItemFromCart }, dispatch);

export default connect( null, mapDispatchToProps )( CartItem );