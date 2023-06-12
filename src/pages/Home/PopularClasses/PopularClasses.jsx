import usePopular from "../../../hooks/usePopular";
import ClassCart from "./ClassCart";
import { Slide } from 'react-awesome-reveal';
import 'animate.css';

const PopularClasses = () => {

  const [classes] = usePopular();
  
  return (
    <div className="my-10">
      <div className="my-10 text-center text-white p-4 mx-auto bg-cyan-600">
        <Slide damping={0.7}>
          <h3 className="text-2xl lg:text-4xl uppercase">Popular Classes</h3>
          <p>Here are our popular classes</p>
        </Slide>
      </div>
        <div className="grid lg:grid-cols-3 space-y-6 px-6">
          {classes.slice(0, 6).map(item => (
            <ClassCart item={item} key={item._id} />
          ))}
        </div>
    </div>
  );
};

export default PopularClasses;