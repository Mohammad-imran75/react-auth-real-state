import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import UpdatePropile from "../Pages/UpdatePropile";
import UserPropile from "../Pages/UserPropile";
import Login from "../Pages/Login";
import RegisterPage from "../Pages/RegisterPage";
import PrivateRoutes from "./PrivateRoutes";
import Property from "../Pages/Property";
import ErrorPage from "../Pages/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root> ,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('/fakeData.json')
        },{
          path:'/resturant/:id',
          element:<PrivateRoutes><Property></Property></PrivateRoutes>,
          loader:()=>fetch('/fakeData.json')
        }
        
        ,{
          path:'/update',
          element:<UpdatePropile></UpdatePropile>
        },{
          path:'/user',
          element:<PrivateRoutes><UserPropile></UserPropile></PrivateRoutes>
        },{
          path:'/login',
          element:<Login></Login>
        },{
          path:'/register',
          element:<RegisterPage></RegisterPage>
        }
      ]
    },
  ]);

export default router;