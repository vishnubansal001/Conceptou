import logo from "../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../../database/data";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="bg-[#BBE2FF] w-full py-3 px-8 flex-col justify-center items-center lg:flex hidden shadow-lg border-[1px] border-[#9ed1f8]">
        <div className="flex flex-row justify-between w-full gap-5 items-center">
          <div>
            <img
              src={logo}
              alt="logo"
              className="h-16 cursor-pointer select-none"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex flex-row gap-8">
            {navItems?.map((item, ind) => (
              <>
                {path !== item.path && (
                  <div
                    key={ind}
                    className="bg-[#FFE3BB] p-1 px-2 rounded-[20px] cursor-pointer select-none"
                    onClick={() => navigate(`${item.path}`)}
                  >
                    <p className="text-xl font-semibold">{item.value}</p>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <nav className="bg-[#BBE2FF] w-full py-3 px-8 flex-col justify-center items-center flex lg:hidden">
        <div className="flex flex-row justify-between w-full gap-5 items-center">
          <div>
            <img
              src={logo}
              alt="logo"
              className="h-16 cursor-pointer select-none"
              onClick={() => navigate("/")}
            />
          </div>
          <button
            onClick={toggleSidebar}
            className="text-black focus:outline-none focus:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSidebarOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`${
            isSidebarOpen
              ? "h-screen w-screen backdrop-blur-sm absolute top-0 left-0"
              : ""
          }`}
        ></motion.div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isSidebarOpen ? "0%" : "100%" }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 right-0 h-screen w-64 bg-[#BBE2FF]`}
        >
          <button
            onClick={toggleSidebar}
            className="text-black float-right focus:outline-none focus:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="black"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="pt-5">
            {navItems?.map((item, ind) => (
              <>
                {path !== item.path && (
                  <div
                    key={ind}
                    className="mt-6 cursor-pointer select-none"
                    onClick={() => navigate(`${item.path}`)}
                  >
                    <p className="text-xl bg-[#FFE3BB] p-1 px-2 rounded-[20px] w-auto text-center cursor-pointer font-semibold">
                      {item.value}
                    </p>
                  </div>
                )}
              </>
            ))}
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
