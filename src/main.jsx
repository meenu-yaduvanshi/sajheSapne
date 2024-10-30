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
import PowerOfLearning from './components/PowerOfLearning.jsx';
import PowerOfEarning from './components/PowerOfEarning.jsx';
import PowerOfCollective from './components/PowerOfCollective.jsx';
import Freedom from './components/Freedom.jsx';
import GetInvolved from './components/GetInvolved.jsx';


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
},
{
  path: "/homepage",
  element: <App />,
},
{
  path:"/powerOfLearning",
  element: <PowerOfLearning />
},
{
  path:"/powerOfEarning",
  element: <PowerOfEarning />
},
{
  path:"/powerOfCollective",
  element: <PowerOfCollective />
},
{
  path:"/freedom",
  element: <Freedom />
},
{
  path:"/getinvolved",
  element: <GetInvolved />
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}>
          <App />
      </RouterProvider>
  </React.StrictMode>
)