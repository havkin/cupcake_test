import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import initStore from './store/store.js';

ReactDom.render(
   <Provider store={ initStore() }>

      <h1>start</h1>
   </Provider>
   ,
   document.getElementById('app')
);