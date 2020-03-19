import React from 'react';

import { push } from 'connected-react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Catalog.css';

import CatalogItem from '../CatalogItem/CatalogItem.jsx';

import { addCatalog } from '../../store/actions/catalog_action';

class Catalog extends React.Component {

   componentDidMount() {

      fetch('http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books')
         .then(response => response.json())
         .then(data => {
            this.props.addCatalog(data['books']);
         });
   }

   render() {

      const itemArray = this.props.catalog.map(item => {
         return (
            <CatalogItem
               key={item.isbn13}
               item={item}
               onClick={() => this.props.push(`/book/${item.isbn13}`)}
            />
         );
      });

      return (

         <div className="catalog">
            {itemArray}
         </div>

      );
   }
}

const mapStateToProps = ({ catalogReducer, }) => ({
   catalog: catalogReducer.catalog,

});

const mapDispatchToProps = dispatch => bindActionCreators({ addCatalog, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);