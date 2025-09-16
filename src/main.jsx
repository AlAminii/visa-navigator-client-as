import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AuthProvider from './Providers/AuthProvider.jsx';

import MainLayot from './Layout/MainLayot.jsx';
import Home from './Components/Pages/Home.jsx';
import AddVisa from './Components/Pages/AddVisa.jsx';
import Allvisa from './Components/Pages/Allvisa.jsx';
import MyaddedVisa from './Components/Pages/MyaddedVisa.jsx';
import MyvisaApplication from './Components/Pages/MyvisaApplication.jsx';
import Login from './Components/Pages/Login.jsx';
import Register from './Components/Pages/Register.jsx';
import VisaDetails from './Components/Pages/VisaDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayot></MainLayot>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addvisa",
        element:<AddVisa></AddVisa>
      },
    {
      path:"/allvisa",
      element:<Allvisa></Allvisa>,
      loader:()=> fetch('http://localhost:5000/visa')
    },
  {
    path:"/myaddvisa",
    element:<MyaddedVisa></MyaddedVisa>
  },
  {
    path:"/myvisaapplication",
    element:<MyvisaApplication></MyvisaApplication>
  },
  {
    path:"/visa/:id",
    element:<VisaDetails></VisaDetails>,
    loader:({params})=> fetch(`http://localhost:5000/visa/${params.id}`)
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/register",
    element:<Register></Register>
  }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
     <RouterProvider router={router} />
 </AuthProvider>
  </StrictMode>,
)
