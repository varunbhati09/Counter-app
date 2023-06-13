import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from './reducers';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';

const store = createStore(counterReducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
