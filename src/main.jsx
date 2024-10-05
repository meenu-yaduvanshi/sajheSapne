import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import DonateNow from './components/DonateNow.jsx';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
  },
  {
      path: "/donatenow",
      element: <DonateNow />, 
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}>
          <App />
      </RouterProvider>
  </React.StrictMode>
)