import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from './App';

import reducers from './reducers';

import App from './App'

const store = configureStore({
    reducer: reducers, 
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk), 
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}> 
    <App />
</Provider>
);