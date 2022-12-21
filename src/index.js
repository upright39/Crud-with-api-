import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddPage from './components/AddPage';
import ErrorPage from './components/ErrorPage';
import EdithPage from './components/EdithPage';
import SearchPage from './components/SearchPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/AddPage",
    element: <AddPage />,
  },
  {
    path: "/edithPage/:id",
    element: <EdithPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
