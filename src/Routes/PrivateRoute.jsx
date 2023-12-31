import { useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/Authprovider";


const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  
  if (loading) {
    return (
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      ></RotatingLines>
    );
  }   
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace />;
};

export default PrivateRoute;