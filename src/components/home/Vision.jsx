import { vision } from "../../database/data";

const Vision = () => {
  return (
    <div className="bg-[#E0F4FF] min-h-[80vh] w-full lg:px-20 px-10 flex flex-col justify-start items-start pb-10 lg:pb-20 overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center lg:gap-14 md:gap-12 gap-8 w-full">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold">
          Vision Of Founders
        </h1>
        <div className="w-full flex flex-col gap-7">
          {vision?.map((service, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex-col justify-around items-center w-full gap-5`}
            >
              <img src={service.pic} alt="" />
              <p className="lg:text-4xl md:text-2xl text-xl bg-[#D9D9D9] px-4 py-2 font-semibold">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vision;
