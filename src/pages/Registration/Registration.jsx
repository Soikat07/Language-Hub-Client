import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/Authprovider';
import Swal from 'sweetalert2';
import 'animate.css';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Lottie from 'lottie-react';
import registrationLottie from '../../assets/112454-form-registration.json'

const Registration = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    if (data.password === data.confirmPassword) {
      createUser(data.email, data.password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(data.name, data.photoURL)
            .then(() => {
              const savedUser = { name: data.name, email: data.email };
              fetch('https://summer-camp-server-ruby.vercel.app/users', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify(savedUser),
              })
                .then(res => res.json())
                .then(data => {
                  if (data.insertedId) {
                    reset();
                    Swal.fire({
                      title: 'User created Successful',
                      showClass: {
                        popup: 'animate__animated animate__fadeInDown',
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp',
                      },
                    });
                    navigate('/');
                  }
                });
            })
            .catch(error => console.error(error));
        })
        .catch(error => console.log(error));
    } else {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The password did not match!',
      });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200 my-10 p-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={registrationLottie} loop={true} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register('name', { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register('photoURL', { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Password</span>
              </label>
              <input
                type="password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password?.type === 'required' && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === 'minLength' && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === 'maxLength' && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === 'pattern' && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register('confirmPassword', { required: true })}
                placeholder="Confirm your password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
            <p>
              <small>
                Already have an account? <Link className='text-cyan-600' to="/login">Login</Link>
              </small>
            </p>
            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
