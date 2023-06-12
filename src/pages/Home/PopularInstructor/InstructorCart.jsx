import { Rotate } from "react-awesome-reveal";

const InstructorCart = ({ item }) => {
  const { instructor_name, instructor_image, course_name, instructor_email } =
    item;
  return (
    <Rotate>
      <div className="card card-compact lg:w-96 bg-base-200 shadow-md">
        <figure>
          <img src={instructor_image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructor_name}</h2>
          <p>Email: {instructor_email}</p>
          <p>Course Name: {course_name}</p>
        </div>
      </div>
    </Rotate>
  );
};

export default InstructorCart;
