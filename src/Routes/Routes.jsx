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

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root> ,
      children:[
        {
          path:'/home',
          element:<Home></Home>,
          loader: async () => {
            const response = await fetch('/fakeData.json');
            const data = await response.json();
            return data;
        }
        
        },{
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