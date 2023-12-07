import { series } from "../../database/data";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Series = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
  }, []);
  return (
    <div className="bg-[#E0F4FF] min-h-[80vh] w-full lg:px-20 px-10 flex flex-col justify-start items-start pb-10 lg:pb-20 overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center lg:gap-14 md:gap-12 gap-8 w-full">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="lg:text-6xl md:text-4xl text-2xl font-bold"
        >
          Series
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-14 w-full px-10">
          {series?.map((item, index) => (
            <div
              key={index}
              data-aos="fade-down"
              data-aos-duration="1500"
              onClick={() => navigate(`/blog-series/${index}`)}
              className="flex flex-col justify-center items-center w-full h-auto py-6 bg-[#D9D9D9] rounded-[25px]"
            >
              <div className="lg:w-[70%] flex flex-col justify-center items-center w-full h-auto py-10">
                <p className="lg:text-4xl hover:underline transition-all ease-in-out duration-300 cursor-pointer md:text-2xl text-lg">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Series;
