import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Error from './Pages/Error.jsx';
import Register from './Pages/Register.jsx';
import Authprovider from './Authprovider.jsx';
import Privateroute from './Pages/Privateroute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('estade.json'),
      },
      {
        path:'/login',
        element:<Privateroute><Login></Login></Privateroute>
      },
      {
        path:'/register',
        element:<Privateroute><Register></Register></Privateroute>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Authprovider>
     <RouterProvider router={router} />
     </Authprovider>
  </React.StrictMode>,
)
