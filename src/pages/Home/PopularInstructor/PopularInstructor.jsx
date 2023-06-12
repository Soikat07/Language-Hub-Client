import usePopular from "../../../hooks/usePopular";
import InstructorCart from "./InstructorCart";
import { Slide, Zoom } from 'react-awesome-reveal';
import 'animate.css';

const PopularInstructor = () => {
  const [classes] = usePopular();
  return (
    <div className="my-20">
      <div className=" my-10 text-center mx-auto bg-cyan-600 p-4 text-white">
        <Slide>
          <h3 className="text-2xl lg:text-4xl uppercase">
            Popular Instructors
          </h3>
          <p>Here are our popular instructors</p>
        </Slide>
      </div>
      <Zoom delay={0.01}>
        <div className="grid lg:grid-cols-3 space-y-6 px-6">
          {classes.slice(0, 6).map(item => (
            <InstructorCart item={item} key={item._id} />
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default PopularInstructor;