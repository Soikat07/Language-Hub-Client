import { useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/Authprovider";


const PrivateRoute = ({children}) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return children;
  }
  if (loader) {
    return (
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    );
  }
  return <Navigate to="/login" state={{ form: location }} replace />;
};

export default PrivateRoute;