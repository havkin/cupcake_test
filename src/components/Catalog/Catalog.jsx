import React from 'react';

import { push } from 'connected-react-router';

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
               onClick={() => this.props.push(`/book/${item.isbn13}`)}
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

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect( mapStateToProps, mapDispatchToProps )( Catalog );