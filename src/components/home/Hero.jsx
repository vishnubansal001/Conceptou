import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-[#E0F4FF] min-h-[80vh] w-full lg:px-20 px-10 flex flex-col justify-start items-start py-10 lg:py-20">
      <div className="flex flex-col justify-center items-center text-center lg:gap-12 md:gap-12 gap-8 w-full">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold">
          inventore commodi neque dolorem
        </h1>
        <div>
          <div className="overflow-hidden">
            <motion.p
              animate={{ y: "0%" }}
              initial={{ y: "-100%" }}
              transition={{ duration: "0.5",delay:"0.3" }}
              className="lg:text-3xl md:text-2xl sm:text-lg text-base"
            >
              inventore commodi neque dolorem laborum dicta veniam quam
              asperiores.{" "}
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              animate={{ y: "0%" }}
              initial={{ y: "-100%" }}
              transition={{ duration: "0.5",delay:"0.34" }}
              className="lg:text-3xl md:text-2xl sm:text-lg text-base"
            >
              Iure natus vitae tempore, inventore labore animi rerum distinctio
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              animate={{ y: "0%" }}
              initial={{ y: "-100%" }}
              transition={{ duration: "0.5",delay:"0.39" }}
              className="lg:text-3xl md:text-2xl sm:text-lg text-base"
            >
              hicnderit dolore. Distinctio rerum ad, veritatis odit similique
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              animate={{ y: "0%" }}
              initial={{ y: "-100%" }}
              transition={{ duration: "0.5",delay:"0.45" }}
              className="lg:text-3xl md:text-2xl sm:text-lg text-base"
            >
              assumenda alias iure incidunt, neque autem aliquid necessitatibus
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              animate={{ y: "0%" }}
              initial={{ y: "-100%" }}
              transition={{ duration: "0.5",delay:"0.5" }}
              className="lg:text-3xl md:text-2xl sm:text-lg text-base"
            >
              quibusdam provident quod voluptates, aliquam deleniti eius
              sapiente!
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              animate={{ y: "0%" }}
              initial={{ y: "-100%" }}
              transition={{ duration: "0.5",delay:"0.55" }}
              className="lg:text-3xl md:text-2xl sm:text-lg text-base"
            >
              Ducimus laborum placeat explicabo hic tenetur saepe officiis
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              animate={{ y: "0%" }}
              initial={{ y: "-100%" }}
              transition={{ duration: "0.5",delay:"0.6" }}
              className="lg:text-3xl md:text-2xl sm:text-lg text-base"
            >
              consequuntur beatae ullam delectus aperiam, id maiores est ratione
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              animate={{ y: "0%" }}
              initial={{ y: "-100%" }}
              transition={{ duration: "0.5",delay:"0.64" }}
              className="lg:text-3xl md:text-2xl sm:text-lg text-base"
            >
              facilis dolorem consequatur maxime, temporibus nam aliquam totam,
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              animate={{ y: "0%" }}
              initial={{ y: "-100%" }}
              transition={{ duration: "0.5",delay:"0.68" }}
              className="lg:text-3xl md:text-2xl sm:text-lg text-base"
            >
              nobis voluptatum vel a. Similique corporis pariatur dolores
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              animate={{ y: "0%" }}
              initial={{ y: "-100%" }}
              transition={{ duration: "0.5",delay:"0.73" }}
              className="lg:text-3xl md:text-2xl sm:text-lg text-base"
            >
              necessitatibus ipsam fugiat modi, odit cumque molestias? Eum enim
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              animate={{ y: "0%" }}
              initial={{ y: "-100%" }}
              transition={{ duration: "0.5",delay:"0.8" }}
              className="lg:text-3xl md:text-2xl sm:text-lg text-base"
            >
              dignissimos incidunt excepturi nesciunt reiciendis,{" "}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
