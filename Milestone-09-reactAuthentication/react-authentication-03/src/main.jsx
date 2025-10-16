import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,  RouterProvider } from 'react-router'

import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Root from './components/Root.jsx'
import AuthProvider from './context/authContext/AuthProvider.jsx'
import Orders from './components/Orders.jsx'
import Profile from './components/Profile.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Dashboard from './components/Dashboard.jsx'


const router= createBrowserRouter([

  {
    path:'/',
    Component:Root,
    children:[
            {
              index:true,
              Component:Home,
              path:'/'
            },
            {
              path:'/login',
              Component:Login
            },
            {
              path:'/register',
              Component:Register
            }
            ,
            {
              path:'/dashboard',
             element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
            ,
            {
              path:'/orders',
              element:<PrivateRoute><Orders></Orders></PrivateRoute>
            }
            ,
            {
              path:'/profile',
             element:<PrivateRoute><Profile></Profile></PrivateRoute>
            }

    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    
  </StrictMode>,
)
