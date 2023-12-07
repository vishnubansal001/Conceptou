import { blogs } from "../../database/data";
import { useNavigate } from "react-router-dom";

const BlogsH = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#E0F4FF] min-h-[80vh] w-full lg:px-20 px-10 flex flex-col justify-start items-start py-10 lg:py-20 overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center lg:gap-14 md:gap-12 gap-8 w-full">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold">Blogs</h1>
        <div className="flex lg:flex-row flex-col justify-around items-center gap-14 w-full px-5">
          {blogs?.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-end items-center lg:gap-10 md:gap-8 max-w-[450px] gap-4 bg-cover bg-no-repeat lg:h-[550px] md:h-[450px] h-[350px] rounded-[50px] overflow-y-hidden hover:overflow-y-visible "
              style={{ backgroundImage: `url(${service.pic})` }}
              onClick={() => navigate("/services")}
            >
              <div className="overflow-hidden hover:translate-y-0 translate-y-1/2 transition-all duration-700 ease-in-out h-full hover:backdrop-blur-lg rounded-[50px] flex flex-col justify-around text-white hover:text-white">
                <h1 className="lg:text-4xl md:text-3xl text-xl font-bold">
                  {service.name}
                </h1>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsH;
