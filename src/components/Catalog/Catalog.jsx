import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Catalog extends React.Component {
   render() {
      return (
         <h1>start</h1>
      );
   }
}

const mapStateToProps = ({ catalogReducer, }) => ({
   catalog: catalogReducer.catalog,

});



export default connect( mapStateToProps )( Catalog );