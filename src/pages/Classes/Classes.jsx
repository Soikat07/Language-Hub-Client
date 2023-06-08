import { useContext } from "react";
import useClasses from "../../hooks/useClasses";
import { AuthContext } from "../../providers/Authprovider";
import Swal from "sweetalert2";


const Classes = () => {
  const [data] = useClasses();
  const { user } = useContext(AuthContext);
  
  const handleSelect = id => {
    console.log(id);
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to login first to select the course',
      });
      return;
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
            <button onClick={()=>handleSelect(item._id)} className="btn bg-cyan-600 text-white rounded-3xl">Select</button>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;