import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {Navigate,useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'
const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    const [loading,setLoading] = useState();
    const location = useLocation()
    // console.log(location);
    if(loading){
        return setLoading(<span className="loading loading-spinner loading-lg"></span>)
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRoutes.propTypes ={
    children:PropTypes.node
}
export default PrivateRoutes;