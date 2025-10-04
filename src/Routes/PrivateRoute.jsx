import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Components/Pages/Loading";


const PrivateRoute = ({children}) => {
    const {users, loading} = useContext(AuthContext)
    const location = useLocation()
    
    // console.log(location)
    
    if(loading){
        return <Loading></Loading>
    }
    if(users && users.email){
        return children
    }
    return <Navigate state={location.pathname} to={`/login`}></Navigate>
};

export default PrivateRoute;