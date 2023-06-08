
const ClassCart = ({ item }) => {
  const {
    course_name,
    image,
    instructor_name,
    available_seats,
    enrolled_students,
    price
  } = item;
  console.log(item);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course_name}</h2>
        <p>Instructor: {instructor_name}</p>        
        <p>Available Seats: {available_seats}</p>        
        <p>Already Enrolled: {enrolled_students}</p>        
        <p>Course Price: ${price}</p>
      </div>
    </div>
  );
};

export default ClassCart;