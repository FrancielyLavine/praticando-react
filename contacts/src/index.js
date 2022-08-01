import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalContextProvider from './contexts/GlobalContextProvider';
import MainRoutes from './routes';
import './styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>
);


