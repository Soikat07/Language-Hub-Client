import { FaBook, FaFile, FaFileVideo, FaHome, FaUsers, FaWallet } from "react-icons/fa";
import { GiTeacher } from 'react-icons/gi';
import { AiOutlineFolderAdd,AiOutlineFileDone } from 'react-icons/ai';
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

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
          <h2 className="text-2xl mb-10 text-gray-700 font-bold">Language Hub</h2>
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/manageClasses">
                  <FaFileVideo className="text-black"/> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">
                  <FaUsers className="text-black"/> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? <>
              <li>
                <NavLink to="/dashboard/addClass">
                  <AiOutlineFolderAdd className="text-black text-xl"/>Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClasses">
                  <FaBook className="text-black"/>My Classes
                </NavLink>
              </li>
            </> : (
            <>
              <li>
                <NavLink to="/dashboard/selectClasses">
                  <AiOutlineFileDone className="text-black text-xl"/> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrollClasses">
                  <FaFile className="text-black"/> My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaWallet className="text-black"></FaWallet> Payment History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome className="text-black"/> Home
            </NavLink>{' '}
          </li>
          <li>
            <NavLink to="/classes">
             <FaFileVideo className="text-black"/> Our Classes</NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <GiTeacher className="text-black"/>Our Instructors</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;