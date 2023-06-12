import usePopular from "../../../hooks/usePopular";
import InstructorCart from "./InstructorCart";


const PopularInstructor = () => {
  const [classes] = usePopular();
  return (
    <div className="my-20">
      <div className=" my-10 text-center mx-auto bg-cyan-600 p-4 text-white">
        <h3 className="text-2xl lg:text-4xl uppercase">Popular Instructors</h3>
        <p>Here are our popular instructors</p>
      </div>
      <div className="grid lg:grid-cols-3 space-y-6 px-6">
        {classes.slice(0,6).map( item => (
          <InstructorCart item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;