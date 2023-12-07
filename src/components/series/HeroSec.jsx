import { useParams } from "react-router-dom";
import { series } from "../../database/data";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSec = () => {
  const params = useParams();
  const id = params.id;
  const data = series[id];
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
  }, []);
  return (
    <div className="bg-[#E0F4FF] min-h-[80vh] w-full lg:px-20 px-10 flex flex-col justify-start items-start py-10 lg:py-20 overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center lg:gap-14 md:gap-12 gap-8 w-full">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="lg:text-6xl md:text-4xl text-2xl font-bold"
        >
          {data.name}
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-6 w-full h-full">
          {data.blogs.map((item, index) => (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              key={index}
              onClick={() => navigate(`/blog-series/${id}/${index}`)}
              style={{ backgroundImage: `url(${item.pic})` }}
              className="bg-cover bg-center bg-no-repeat md:h-[280px] h-[240px] rounded-[20px] flex justify-center items-end py-4"
            >
              <p className="lg:text-4xl md:text-3xl text-xl font-bold hover:underline transition-all duration-300 ease-in-out cursor-pointer">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
