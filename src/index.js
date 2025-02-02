import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import App from './App';
import Films from './components/Films';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>,
    children: [
      {
        path: "/Home", 
        element: <Home/>
      },
      {
        path: "/Login", 
        element: <Login/>
      },
      {
        path: "/About", 
        element: <About/>
      },
      {
        path: "/Films", 
        element: <Films/>
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<RouterProvider router= {router} />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
