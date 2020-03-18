import React from 'react';
import './CartItem.css';

class CartItem extends React.Component {
   render () {
      const price = +this.props.item.price;
      const qnt = +this.props.item.qnt;
      return (
         <li className="cart-item">
            <h4>{ this.props.item.title }</h4>
            <p>Price ${ this.props.item.price } </p>
            <div>{ this.props.item.qnt }</div>
            <p>Total ${ price * qnt }</p>
            <button>Remove</button>
         </li>
      );
   }
}

export default CartItem;