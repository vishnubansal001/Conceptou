import { social } from "../../database/data";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Social = () => {
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
          Social Post
        </h1>
        <div className="flex lg:flex-row flex-col justify-around items-center gap-14 w-full px-5">
          {social?.map((service, index) => (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              key={index}
              className="flex flex-col justify-end items-center lg:gap-10 md:gap-8 w-auto h-auto gap-4 bg-cover bg-no-repeat rounded-[50px] overflow-y-hidden hover:overflow-y-visible "
              //   style={{ backgroundImage: `url(${service.pic})` }}
              onClick={() => navigate(`${service.link}`)}
            >
              <img src={service.pic} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;
