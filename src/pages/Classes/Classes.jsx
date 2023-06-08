import { useContext } from "react";
import useClasses from "../../hooks/useClasses";
import { AuthContext } from "../../providers/Authprovider";
import Swal from "sweetalert2";
import {useLocation, useNavigate } from "react-router-dom";


const Classes = () => {
  const [data] = useClasses();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleSelect = item => {
    
    if (user && user.email) {
      const selectClass = {
        classId: item._id,
        course_name: item.course_name,
        price: item.price,
        available_seats: item.available_seats,
        enrolled_students: item.enrolled_students,
        email: user.email,
      };
      console.log(selectClass);
      fetch('http://localhost:5000/selectClass', {
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
  }
  
  return (
    <div className="grid grid-cols-3 space-y-10">
      {data.map(item => (
        <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.course_name}</h2>
            <p>Instructor: {item.instructor_name}</p>
            <p>Available Seats: {item.available_seats}</p>
            <p>Already Enrolled: {item.enrolled_students}</p>
            <p>Course Price: ${item.price}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleSelect(item)} className="btn bg-cyan-600 text-white rounded-3xl">Select</button>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;