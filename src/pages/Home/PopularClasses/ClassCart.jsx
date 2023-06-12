import { Flip } from "react-awesome-reveal";

const ClassCart = ({ item }) => {
  const {
    course_name,
    image,
    instructor_name,
    available_seats,
    enrolled_students,
    price
  } = item;
  
  return (
    <Flip>
      <div className="card lg:px-0 lg:w-96 shadow-md bg-base-200">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course_name}</h2>
          <p>Instructor: {instructor_name}</p>
          <p>Available Seats: {available_seats}</p>
          <p>Already Enrolled: {enrolled_students}</p>
          <p>Course Price: ${price}</p>
        </div>
      </div>
    </Flip>
  );
};

export default ClassCart;