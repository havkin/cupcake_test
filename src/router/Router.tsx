import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Catalog from '../components/Catalog/Catalog';
import BuyItem from '../components/BuyItem/BuyItem';
import Cart from '../components/Cart/Cart';

const Router: React.FC= () => {
      return (
         <Switch>
            <Route
               exact
               path={'/'}
               component={Catalog}
            />
            <Route
               exact
               path={'/book/:bookId'}
               component={BuyItem}
            />
            <Route
               exact
               path={'/cart'}
               component={Cart}
            />
         </Switch>
      );
}

export default Router;