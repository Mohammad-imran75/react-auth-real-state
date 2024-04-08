import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {Navigate} from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    console.log(user);
    // if(loading){
    //     return <span className="loading loading-spinner loading-lg"></span>
    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;