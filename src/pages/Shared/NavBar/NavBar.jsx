import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/Authprovider";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(error => console.error(error));
  };

  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/instructors"
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/classes"
        >
          Classes
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 my-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-4 py-2 shadow bg-base-100 rounded-box w-52 text-slate-600 font-bold uppercase"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <h3 className="font-bold lg:text-4xl">
            <span className="text-slate-700">FashionLab</span>
          </h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-slate-600 font-bold uppercase">
          {navItems}
        </ul>
      </div>
      <div className="sm:relative navbar-end">
        {user ? (
          <span className="lg:flex lg:space-x-2">
            <img
              title={user.displayName}
              className="ms-8 w-10 rounded-full"
              src={user.photoURL}
              alt=""
            />
            <button
              onClick={handleLogout}
              className="font-bold  text-slate-600 hover:bg-slate-200 px-3 py-2 rounded-lg"
            >
              Logout
            </button>
          </span>
        ) : (
          <Link className="me-5" to="/login">
            <button className="font-bold text-lg text-slate-600 hover:bg-slate-200 px-3 py-2 rounded-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;