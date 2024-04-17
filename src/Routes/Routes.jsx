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
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Contact from "../Pages/Contact";
AOS.init();
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
          element:<UpdatePropile></UpdatePropile>,
          loader:()=>fetch('/fakeData.json')
        },{
          path:'/user',
          element:<PrivateRoutes><UserPropile></UserPropile></PrivateRoutes>
        },{
          path:'/login',
          element:<Login></Login>
        },{
          path:'/register',
          element:<RegisterPage></RegisterPage>
        },{
          path:'/contact',
          element:<Contact></Contact>
        }
      ]
    },
  ]);

export default router;