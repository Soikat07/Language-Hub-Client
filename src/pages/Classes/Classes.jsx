import { useContext } from 'react';
import useClasses from '../../hooks/useClasses';
import { AuthContext } from '../../providers/Authprovider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const Classes = () => {
  const [data] = useClasses();
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = item => {
    if (user && user.email) {
      const selectClass = {
        classId: item._id,
        course_name: item.course_name,
        price: item.price,
        available_seats: item.available_seats,
        image: item.image,
        email: user.email,
      };
      console.log(selectClass);
      fetch('https://summer-camp-server-ruby.vercel.app/selectClass', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(selectClass),
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'The class is selected',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Please login to select the course',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="grid grid-cols-3 space-y-10 my-10">
      {data.map(item => (
        <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div
            className={
              item.available_seats === 0
                ? 'card-body bg-red-600 text-white'
                : 'card-body'
            }
          >
            <h2 className="card-title">{item.course_name}</h2>
            <p>Instructor: {item.instructor_name}</p>
            <p>Available Seats: {item.available_seats}</p>
            <p>Already Enrolled: {item.enrolled_students}</p>
            <p>Course Price: ${item.price}</p>
            <div className="card-actions justify-end">
              <button
                disabled={
                  item.available_seats === 0
                    ? true
                    : isAdmin
                    ? true
                    : isInstructor
                    ? true
                    : false
                }
                onClick={() => handleSelect(item)}
                className="btn bg-cyan-600 text-white rounded-3xl"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
