import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import 'animate.css';
import { AuthContext } from "../../providers/Authprovider";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Lottie from 'lottie-react';
import loginLottie from '../../assets/107385-login.json';


const Login = () => {
  const [show, setShow] = useState(false);
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);

   logIn(data.email, data.password)
     .then(result => {
       const loggedUser = result.user;
       console.log(loggedUser);
       Swal.fire({
         title: 'Login Successful',
         showClass: {
           popup: 'animate__animated animate__fadeInDown',
         },
         hideClass: {
           popup: 'animate__animated animate__fadeOutUp',
         },
       });
       navigate(from, { replace: true });
       reset();
     })
     .catch(error => {
       console.error(error);
     });
  };
  //handle show password
  const handlePasswordShow = () => {
    setShow(!show);
  }

  return (
    <div className="hero min-h-screen bg-base-200 my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={loginLottie} loop={true} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register('email', { required: true })}
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? 'text' : 'password'}
                {...register('password', { required: true })}
                placeholder="Password"
                className="input input-bordered"
              />
              <div className="absolute right-4 bottom-4">
                <span onClick={handlePasswordShow}>
                  {show ? (
                    <FaEyeSlash title="Hide password" />
                  ) : (
                    <FaEye title="Show password" />
                  )}
                </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p>
              <small>
                New in here? <Link to="/registration" className="text-cyan-600">Sign Up</Link>
              </small>
            </p>
            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;