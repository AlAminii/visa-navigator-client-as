import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import AuthProvider, { AuthContext } from './Providers/AuthProvider.jsx';

import MainLayot from './Layout/MainLayot.jsx';
import Home from './Components/Pages/Home.jsx';
import AddVisa from './Components/Pages/AddVisa.jsx';
import Allvisa from './Components/Pages/Allvisa.jsx';
import MyaddedVisa from './Components/Pages/MyaddedVisa.jsx';
import MyvisaApplication from './Components/Pages/MyvisaApplication.jsx';
import Login from './Components/Pages/Login.jsx';
import Register from './Components/Pages/Register.jsx';
import VisaDetails from './Components/Pages/VisaDetails.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import Hero from './Components/Pages/Hero.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Error from './Components/Pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayot />,
    errorElement: <Error />, 
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`https://visa-navigator-server-as.onrender.com/visa?limit=6`).then(res => res.json())
      },
      {
        path: "/hero",
        element: <Hero />,
      },
      {
        path: "/addvisa",
        element: <PrivateRoute><AddVisa /></PrivateRoute>
      },
      {
        path: "/allvisa",
        element: <Allvisa />,
        loader: () => fetch('https://visa-navigator-server-as.onrender.com/visa')
      },
      {
        path: "/myaddvisa",
        element: <PrivateRoute><MyaddedVisa /></PrivateRoute>
      },
      {
        path: "/myvisaapplication",
        element: <PrivateRoute><MyvisaApplication /></PrivateRoute>,
        loader: () => fetch("https://visa-navigator-server-as.onrender.com/applyvisa")
      },
      {
        path: "/visa/:id",
        element: <PrivateRoute><VisaDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://visa-navigator-server-as.onrender.com/visa/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    
      {
        path: "*",
        element: <Error />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<HelmetProvider>
   <AuthProvider>
     <RouterProvider router={router} />
 </AuthProvider>
</HelmetProvider>
  </StrictMode>,
)
