import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    console.log(user);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }if(user){
        return children;
    }

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;