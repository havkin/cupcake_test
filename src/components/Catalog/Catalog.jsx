import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Catalog.css';

import CatalogItem from '../CatalogItem/CatalogItem.jsx';

class Catalog extends React.Component {
   
   render() {

      const itemArray = this.props.catalog.map( item => {
         return (
            <CatalogItem
               key={ item.isbn13 }
               item={ item }
            />
         );
      });

      return (
      
         <div className="catalog">
            { itemArray }
         </div>

      );
   }
}

const mapStateToProps = ({ catalogReducer, }) => ({
   catalog: catalogReducer.catalog,

});



export default connect( mapStateToProps )( Catalog );