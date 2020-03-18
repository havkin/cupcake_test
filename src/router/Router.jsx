import React from 'react'; 
import { Switch, Route } from 'react-router-dom';

import Catalog from '../components/Catalog/Catalog.jsx';
import BuyItem from '../components/BuyItem/BuyItem.jsx';

export default class Router extends React.Component {
   render() { 
      return (
         <Switch>
            <Route 
               exact
               path={ '/' }
               component={ Catalog }
            />
            <Route 
               exact
               path={ '/book/:bookId' }
               component={ BuyItem }
            />
         </Switch>
      );
   }
}