import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Header.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
     <RouterProvider router={router} />
 </AuthProvider>
  </StrictMode>,
)
