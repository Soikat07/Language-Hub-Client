const InstructorCart = ({ item }) => {
  const { instructor_name, instructor_image, course_name, instructor_email } =
    item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={instructor_image} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{instructor_name}</h2>
        <p>Email: {instructor_email}</p>
        <p>Course Name: {course_name}</p>
      </div>
    </div>
  );
};

export default InstructorCart;
