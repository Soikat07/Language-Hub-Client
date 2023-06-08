import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";


const Home = () => {
  
  return (
    <div>
      <Banner />
      <PopularClasses />
      <PopularInstructor/>
      <ExtraSection/>
    </div>
  );
};

export default Home;