import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { newRouter } from './router/config/routerConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <RouterProvider router={newRouter}/>


    {/* <BrowserRouter> */}
      {/* <App /> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
