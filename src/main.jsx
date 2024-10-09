import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import DonateNow from './components/DonateNow.jsx';
import Document from './components/Document.jsx';
import Deliver from './components/Deliver.jsx';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
  },
  {
      path: "/donatenow",
      element: <DonateNow />, 
  },
  {
    path: "/deliver",
    element: <Deliver />, 
},
{
  path: "/document",
  element: <Document />, 
}


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}>
          <App />
      </RouterProvider>
  </React.StrictMode>
)