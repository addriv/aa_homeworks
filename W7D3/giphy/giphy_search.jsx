import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchSearchGiphys} from './actions/giphy_actions';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  window.fetchSearchGiphys = fetchSearchGiphys;
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
