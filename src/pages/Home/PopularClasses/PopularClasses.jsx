
import usePopular from "../../../hooks/usePopular";
import ClassCart from "./ClassCart";

const PopularClasses = () => {

  const [classes] = usePopular();
  
  return (
    <div className="my-10">
      <div className=" my-10 text-center w-3/4 mx-auto">
        <h3 className="text-4xl uppercase">Popular Classes</h3>
        <p>Here are our popular classes</p>
      </div>
      <div className="grid grid-cols-3 space-y-5">
        {classes.map(item => (
          <ClassCart item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;