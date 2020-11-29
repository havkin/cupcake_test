import React, { useEffect } from 'react';

import { push } from 'connected-react-router';

import { bindActionCreators } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';

import './Catalog.css';

import CatalogItem from '../CatalogItem/CatalogItem';

import { addCatalog } from '../../store/actions/catalog_action';
import { Book, Store } from '../types';

const Catalog: React.FC = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books')
      .then(response => response.json())
      .then(data => {
        dispatch(addCatalog(data['books']));
      });
  });

  const catalog: any = useSelector<Store>(({ catalogReducer }) => catalogReducer.catalog);

  const itemArray = catalog.map((item: Book) => {
    return <CatalogItem key={item.isbn13} item={item} onClick={() => props.history.push(`/book/${item.isbn13}`)} />;
  });

  return <div className='catalog'>{itemArray}</div>;
};

export default Catalog;
