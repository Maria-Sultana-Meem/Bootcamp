import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Coverage from "../pages/coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
         index:true,
         path:'/',
         element:<Home></Home>
    },
    {
        path:'/coverage',
        element:<Coverage></Coverage>,
        loader:()=>fetch('/warehouses.json').then(res=>res.json())
    }
]
  },
]);