import { useParams } from "react-router-dom";
import { series } from "../../database/data";

const HeroSection = () => {
  const params = useParams();
  const id = params.id;
  const blogId = params.blogId;
  const data = series[id].blogs[blogId];
  return (
    <div className="bg-[#E0F4FF] min-h-[80vh] w-full lg:px-20 px-10 flex flex-col justify-start items-start py-10 lg:py-20 overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center lg:gap-14 md:gap-12 gap-8 w-full">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold">
          {data.name}
        </h1>
        <div className="flex flex-row items-start w-full gap-10">
          {/* <div className="rounded-[20px] w-full h-full"> */}
            <img src={data.pic} alt="" />
          {/* </div> */}
          <p className="lg:text-3xl md:text-2xl sm:text-lg text-base text-left">
            {data.data}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
