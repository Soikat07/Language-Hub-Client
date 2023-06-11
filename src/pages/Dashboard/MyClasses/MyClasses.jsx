import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const MyClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myClasses = []} = useQuery(['classes',user?.email], async () => {
    const res = await axiosSecure.get(`/myClasses?email=${user?.email}`);
    return res.data;
  });

  return (
    <div className="overflow-x-auto">
      <table className="table w-full bg-cyan-600">
        {/* head */}
        <thead>
          <tr className="text-white text-base">
            <th>#</th>
            <th>Class Name</th>
            <th>Enrolled Students</th>
            <th>Status</th>
            <th>Action</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {myClasses.map((item, index) => (
            <>
              <tr className="bg-base-200 hover" key={item._id}>
                <th>{index + 1}</th>
                <td>{item.course_name}</td>
                <td>{item.enrolled_students}</td>
                <td>{item.status}</td>
                <td>
                  <Link to={`/dashboard/updateClass/${item._id}`}>
                    <button
                      className="btn btn-xs bg-yellow-400"
                    >
                      Update
                    </button>
                  </Link>
                </td>
                <td></td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;