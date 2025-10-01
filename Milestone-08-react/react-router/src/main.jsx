import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Users from './Components/Users/Users.jsx'
import UserDetails from './Components/UserDetails/UserDetails.jsx'

const router= createBrowserRouter([

  {
    path:'/',
    Component: Root,
    children: [
       {index:true,Component:Home},
       {path:'about', Component:About},
       {path:'users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users},
      {
        path:'users/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
      path:'*',
      element: <h3>Not Found : 404 status</h3>

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
