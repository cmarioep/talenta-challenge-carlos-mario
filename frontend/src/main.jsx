import React from 'react';
import ReactDOM from 'react-dom/client';


import { StoreProvider } from './store/StoreProvider';
import { App } from './App';

import './styles/index.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <App />
  </StoreProvider>

)
