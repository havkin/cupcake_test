import React from 'react';
import './Header.css';

import { push } from 'connected-react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Header extends React.Component {
   render() {
      return (
         <div className="header">
            <h1 onClick={ () => this.props.push('/') }>Cupcake Books</h1>
            <button 
               className="cart-btn"
               onClick={ () => this.props.push('/cart') }
            >Cart</button>
         </div>
      );
   }

}

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect( null, mapDispatchToProps )(Header);