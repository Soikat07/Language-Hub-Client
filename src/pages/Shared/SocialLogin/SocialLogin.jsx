import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/Authprovider";


const SocialLogin = () => {

  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(savedUser),
        })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
    .catch(error=>console.error(error))
  }

  return (
    <div className="text-center">
      <div className="divider">Or</div>
      <div>
        <p>Login with Google</p>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline bg-blue-600 border-none mt-2"
        >
          <FaGoogle className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;