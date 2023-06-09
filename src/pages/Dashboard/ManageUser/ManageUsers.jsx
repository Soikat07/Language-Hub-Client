import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users');
    return res.data;
  });

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an Admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = user => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an Instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };


  return (
    <div className="w-full ms-5">
      <h3 className="text-3xl font-semibold mb-2">
        Total Users:{users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full bg-cyan-600">
          {/* head */}
          <thead>
            <tr className="text-white text-base">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <>
                <tr className="bg-base-200" key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      disabled={user.role==='Admin'?true:false}
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-xs btn-outline text-red-600"
                    >
                      Make Admin
                    </button>
                    <button
                      disabled={user.role==='Instructor'?true:false}
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-xs btn-outline text-yellow-600"
                    >
                      Make Instructor
                    </button>
                  </td>
                  <td>{user.role ? user.role : 'Student'}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;