import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get('/classes');
    return res.data;
  });

  const handleApprove = item => {
    
      fetch(`http://localhost:5000/manageClasses/approve/${item._id}`, {
        method: 'PUT',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `Class approved`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
  }
  const handleDeny = item => {
    
      fetch(`http://localhost:5000/manageClasses/deny/${item._id}`, {
        method: 'PUT',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `Class Denied`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
  }

  return (
    <div className="w-full ms-5">
      <div className="overflow-x-auto">
        <table className="table w-full bg-cyan-600">
          {/* head */}
          <thead>
            <tr className="text-white text-base">
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <>
                <tr className="bg-base-200" key={item._id}>
                  <th>{index + 1}</th>
                  <td className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </td>
                  <td>{item.course_name}</td>
                  <td>{item.instructor_name}</td>
                  <td>{item.instructor_email}</td>
                  <td>{item.available_seats}</td>
                  <td>${item.price}</td>
                  <td
                    className={
                      item.status === 'Denied'
                        ? 'text-red-600'
                        : item.status === 'Approved'
                        ? 'text-green-600'
                        : 'text-blue-600'
                    }
                  >
                    {item.status}
                  </td>
                  <td>
                    <div className="space-y-1">
                      <button
                        disabled={
                          item.status === 'Approved'
                            ? true
                            : item.status === 'Denied'
                            ? true
                            : false
                        }
                        onClick={() => handleApprove(item)}
                        className="btn btn-outline btn-xs text-green-600"
                      >
                        Approve
                      </button>
                      <button
                        disabled={
                          item.status === 'Approved'
                            ? true
                            : item.status === 'Denied'
                            ? true
                            : false
                        }
                        onClick={() => handleDeny(item)}
                        className="btn btn-outline btn-xs text-red-600"
                      >
                        Deny
                      </button>
                      <Link to={`/dashboard/feedback/${item._id}`}>
                        <button disabled={item.feedback?true:false} className="btn btn-outline btn-xs text-">
                          Feedback
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;