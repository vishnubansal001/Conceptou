import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
  }, []);
  return (
    <div className="bg-[#E0F4FF] min-h-[80vh] w-full">
      <div className="flex justify-center items-center">
        <div className="container flex flex-col justify-center items-center my-4 px-4 lg:px-20">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="w-full p-8 my-4 md:px-12 mr-auto rounded-2xl shadow-2xl bg-white"
          >
            <div className="flex justify-center items-center">
              <h1 className="font-bold uppercase text-5xl">Contact Us</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="uppercase my-2 w-1/2 lg:w-1/4 text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg
                      focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
