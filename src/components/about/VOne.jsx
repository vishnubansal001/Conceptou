import kartik from "../../assets/kartik.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
  }, []);
  return (
    <div className="bg-[#E0F4FF] min-h-[60vh] w-full lg:px-20 px-10 flex flex-col justify-start items-start pb-10 lg:pb-20">
      <div className="flex flex-col justify-center items-center text-center lg:gap-12 md:gap-12 gap-8 w-full">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="lg:text-6xl md:text-4xl text-2xl font-bold"
        >
          Vision Of Founders
        </h1>
        <div className="flex lg:flex-row flex-col justify-center items-center w-full gap-14">
          <img
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="w-96"
            src={kartik}
            alt=""
          />
          <p className="lg:text-3xl md:text-2xl sm:text-lg text-base ">
            inventore commodi neque dolorem laborum dicta veniam quam
            asperiores. Iure natus vitae tempore, inventore labore animi rerum
            distinctio hicnderit dolore. Distinctio rerum ad, veritatis odit
            similique assumenda alias iure incidunt, neque autem aliquid
            necessitatibus quibusdam provident quod voluptates, aliquam deleniti
            eius sapiente! Ducimus laborum placeat explicabo hic tenetur saepe
            officiis consequuntur beatae ullam delectus aperiam, id maiores est
            ratione facilis dolorem consequatur maxime, temporibus nam aliquam
            totam, nobis voluptatum vel a. Similique corporis pariatur dolores
            necessitatibus ipsam fugiat modi, odit cumque molestias? Eum enim
            dignissimos incidunt excepturi nesciunt reiciendis,
          </p>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center w-full gap-14">
          <img
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="w-96"
            src={kartik}
            alt=""
          />
          <p className="lg:text-3xl md:text-2xl sm:text-lg text-base ">
            inventore commodi neque dolorem laborum dicta veniam quam
            asperiores. Iure natus vitae tempore, inventore labore animi rerum
            distinctio hicnderit dolore. Distinctio rerum ad, veritatis odit
            similique assumenda alias iure incidunt, neque autem aliquid
            necessitatibus quibusdam provident quod voluptates, aliquam deleniti
            eius sapiente! Ducimus laborum placeat explicabo hic tenetur saepe
            officiis consequuntur beatae ullam delectus aperiam, id maiores est
            ratione facilis dolorem consequatur maxime, temporibus nam aliquam
            totam, nobis voluptatum vel a. Similique corporis pariatur dolores
            necessitatibus ipsam fugiat modi, odit cumque molestias? Eum enim
            dignissimos incidunt excepturi nesciunt reiciendis,
          </p>
        </div>
      </div>
    </div>
  );
};

export default VOne;
