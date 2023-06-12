import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import slider1 from '../../../assets/Banner/slider1.jpg'
import slider2 from '../../../assets/Banner/slider2.jpg'
import slider3 from '../../../assets/Banner/slider3.jpg'
import slider4 from '../../../assets/Banner/slider4.jpg'

const Banner = () => {
  return (
    <Carousel>
      <div className="relative">
        <img src={slider1} />
        <div className="absolute top-5 lg:top-60 right-1/3 lg:right-1/3 w-1/2 lg:w-4/12">
          <p className="text-white text-2xl lg:text-4xl">
            Putting Children First. Preparing Children For Success In Life
          </p>
          <div className="flex lg:block mt-5 lg:space-x-5">
            <button className="btn text-white uppercase bg-red-500 rounded-3xl border-none">
              Sign up now
            </button>
            <button className="text-white btn btn-outline uppercase rounded-3xl border-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={slider2} />
        <div className="absolute top-5 lg:top-60 right-1/3 lg:right-1/3 w-1/2 lg:w-4/12">
          <p className="text-white text-2xl lg:text-4xl">
            Every student matters, every moment counts.
          </p>
          <div className="mt-5 space-x-5">
            <button className="btn text-white uppercase bg-red-500 rounded-3xl border-none">
              Sign up now
            </button>
            <button className="text-white btn btn-outline uppercase rounded-3xl border-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={slider3} />
        <div className="absolute top-5 lg:top-60 right-1/3 lg:right-1/3 w-1/2 lg:w-4/12">
          <p className="text-white text-2xl lg:text-4xl">
            Teaching Turning Today’s Learners Into Tomorrow’s Leaders
          </p>
          <div className="mt-5 space-x-5">
            <button className="btn text-white uppercase bg-red-500 rounded-3xl border-none">
              Sign up now
            </button>
            <button className="text-white btn btn-outline uppercase rounded-3xl border-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={slider4} />
        <div className="absolute top-5 lg:top-60 right-1/3 lg:right-1/3 w-1/2 lg:w-4/12">
          <p className="text-white text-2xl lg:text-4xl">
            To have another language is to possess a second soul.
          </p>
          <div className="mt-5 space-x-5">
            <button className="btn text-white uppercase bg-red-500 rounded-3xl border-none">
              Sign up now
            </button>
            <button className="text-white btn btn-outline uppercase rounded-3xl border-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;