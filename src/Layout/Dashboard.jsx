import { FaBook, FaCalendarAlt, FaHome, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  const isAdmin = false;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 h-full bg-cyan-500 text-white">
          <h2 className="text-3xl mb-10 text-gray-700 font-semibold">Language Hub</h2>
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/manageClasses">
                  <FaWallet></FaWallet> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">
                  <FaBook></FaBook> Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/selectClasses">
                  <FaCalendarAlt></FaCalendarAlt> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrollClasses">
                  <FaCalendarAlt></FaCalendarAlt> My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{' '}
          </li>
          <li>
            <NavLink to="/classes"> Our Classes</NavLink>
          </li>
          <li>
            <NavLink to="/instructors">Our Instructors</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;