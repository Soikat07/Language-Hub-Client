import useClasses from "../../hooks/useClasses";


const Instructors = () => {
  const [classes, ,] = useClasses();
  
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-orange-400 text-black text-base">
          <tr>
            <th>Serial</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={item.instructor_image}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </td>
              <td>{item.instructor_name}</td>
              <td>{item.instructor_email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Instructors;