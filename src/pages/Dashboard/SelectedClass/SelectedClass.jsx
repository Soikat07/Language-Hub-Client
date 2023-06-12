import { FaTrashAlt } from 'react-icons/fa';
import useSelected from '../../../hooks/useSelected';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SelectedClass = () => {
  const [selectClasses, refetch] = useSelected();
  // console.log(selectClasses);
  const total = selectClasses.reduce((sum, item) => item.price + sum, 0);
  const totalPrice = total.toFixed(2);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://summer-camp-server-ruby.vercel.app/selectClass/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire('Deleted!', 'Your class has been deleted.', 'success');
            }
          });
      }
    });
  };

  return (
    <div className="w-full ms-10">
      <div className="flex justify-evenly mb-5 text-2xl font-bold">
        <h3>Selected Class :{selectClasses.length}</h3>
        <h3>Total Price: ${totalPrice}</h3>
        <Link to="/dashboard/payment">
          <button className="btn btn-warning px-8">Pay</button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead className="bg-cyan-500 text-base text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectClasses.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </td>
                <td>{item.course_name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-md bg-red-600 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
