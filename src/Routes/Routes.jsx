import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import UpdatePropile from "../Pages/UpdatePropile";
import UserPropile from "../Pages/UserPropile";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root> ,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },{
          path:'/update',
          element:<UpdatePropile></UpdatePropile>
        },{
          path:'/user',
          element:<UserPropile></UserPropile>
        }
      ]
    },
  ]);

export default router;