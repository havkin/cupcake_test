import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import initStore from './store/store.js';

import Catalog from './components/Catalog/Catalog.jsx';

ReactDom.render(
   <Provider store={ initStore() }>
      <Catalog />
   </Provider>
   ,
   document.getElementById('app')
);