import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const ComingSoon = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300, 
      once: true, 
    });
  }, []);
  return (
    <div className="bg-[#E0F4FF] min-h-[60vh] w-full lg:px-20 px-10 flex flex-col justify-start items-start py-10 lg:pb\y-20">
      <div className="flex flex-col justify-center items-center text-center w-full">
        <h1 data-aos="fade-in" className="lg:text-6xl md:text-4xl text-2xl font-bold">Services</h1>
        <div data-aos="fade-in" className=" h-[80vh] flex flex-col justify-center items-center text-center w-full">
          <p className="lg:text-7xl md:text-5xl sm:text-4xl font-bold text-3xl lg:w-[80%] w-auto">
            Coming soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
