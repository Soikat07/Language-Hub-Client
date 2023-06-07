import { Link, useRouteError } from "react-router-dom";
import errorJSON from '../../../assets/error-404-page.json'
import Lottie from 'lottie-react';

const ErrorPage = () => {
  const { error } = useRouteError();

  return (
    <section className="flex items-center bg-gray-100 text-gray-900 py-5">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto">
        <div>
          <Lottie animationData={errorJSON} loop={true} />
        </div>
        <div className="max-w-md text-center">
          <p className="text-xl font-semibold md:text-2xl mb-10 mt-2">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-amber-400 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;