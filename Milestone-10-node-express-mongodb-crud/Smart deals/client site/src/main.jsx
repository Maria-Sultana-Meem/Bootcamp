import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout.jsx';
import Home from './components/Home.jsx';
import AllProducts from './components/AllProducts.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Register from './components/Register.jsx';
import MyProducts from './components/MyProducts.jsx';
import MyBids from './components/MyBids.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import ProductDetails from './components/ProductDetails.jsx';


const router = createBrowserRouter([
 {
  path:'/',
  Component:RootLayout,
  children:[
    {
      index:true,
      path:'/',
      Component:Home
    },{
      path:'/allProducts',
      Component:AllProducts
    },
    {
      path:'/register',
      Component:Register
    },
   
    {
      path:'/myProducts',
      element:<PrivateRoute><MyProducts></MyProducts></PrivateRoute>
    },
    {
      path:'/myBids',
      element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
    },
    {
      path:'/productDetails/:id',
      loader:({params})=>fetch(`https://smart-deals-psi.vercel.app/products/${params.id}`),
     element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
    },
    
  ]
 }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />,
   </AuthProvider>
  </StrictMode>,
)
