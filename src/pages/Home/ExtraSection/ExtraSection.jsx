import './ExtraSection.css'
import { GoPerson, GoFileDirectory, GoGitBranch,GoBriefcase } from 'react-icons/go';
import { GiTeacher } from 'react-icons/gi';

const ExtraSection = () => {
  return (
    <section className="feature-section my-20 bg-fixed text-center">
      <div className="p-10 text-white bg-black bg-opacity-25">
        <div className='bg-black bg-opacity-30 p-4 mb-4 w-4/6 mx-auto'>
          <h3 className="text-4xl">Language School In Number</h3>
        </div>
        <div className="grid grid-cols-5 space-x-3 w-4/6 mx-auto">
          <div className="bg-black  bg-opacity-30 p-10 mb-5 font-bold">
            <span className="text-4xl">
              <GoPerson />
            </span>
            <h2 className="text-3xl my-4">260</h2>
            <h4>Students</h4>
          </div>
          <div className="bg-black  bg-opacity-30 p-10 mb-5 font-bold">
            <span className="text-4xl">
              <GoFileDirectory />
            </span>
            <h2 className="text-3xl my-4">35</h2>
            <h4>Learning Language</h4>
          </div>
          <div className="bg-black  bg-opacity-30 p-10 mb-5 font-bold">
            <span className="text-4xl">
              <GoBriefcase />
            </span>
            <h2 className="text-3xl my-4">12</h2>
            <h4>Language Trainings</h4>
          </div>
          <div className="bg-black  bg-opacity-30 p-10 mb-5 font-bold">
            <span className="text-4xl">
              <GoGitBranch />
            </span>
            <h2 className="text-3xl my-4">8</h2>
            <h4>Branches</h4>
          </div>
          <div className="bg-black  bg-opacity-30 p-10 mb-5 font-bold">
            <span className="text-4xl">
              <GiTeacher />
            </span>
            <h2 className="text-3xl my-4">17</h2>
            <h4>Teachers</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-10 bg-orange-400">
        <h2 className="text-white text-3xl mr-10">
          Subscribe to our Newsletter
        </h2>
        <div className="form-control">
          <label className="input-group">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered bg-opacity-0 border-white"
            />
            <span className="text-orange-400 font-bold">SUBSCRIBE</span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;