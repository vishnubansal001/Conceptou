import logo from "../../assets/logo.png";
import loc from "../../assets/loc.svg";
import In from "../../assets/in.svg";
import insta from "../../assets/insta.svg";
import face from "../../assets/face.svg";
import twit from "../../assets/twit.svg";
import phone from "../../assets/phone.svg";
import print from "../../assets/print.svg";

const Footer = () => {
  return (
    <div className="bg-[#BBE2FF] shadow-lg flex flex-col justify-center items-center lg:pt-20 pt-10 pb-10 lg:px-20 px-10">
      <div className="w-full flex flex-col justify-start items-center gap-5 px-10 pb-10">
        <div className="flex w-full md:flex-row flex-col justify-around items-center gap-5 border-t-2 border-[#0081FE] pt-10">
          <div className="">
            <img src={logo} alt="img/logo" />
          </div>
          <div className="flex flex-col md:justify-start md:items-start items-center justify-center gap-3">
            <div className="flex flex-row gap-2 text-lg items-center justify-center">
              <img src={loc} alt="img/location" />
              <p>ABC Company, 123 East, 17th Street, St. louis 10001</p>
            </div>
            <div className="flex md:flex-row flex-col text-lg items-center md:justify-between justify-center gap-4 w-full">
              <div className="flex flex-row gap-2 text-lg items-center justify-center">
                <img src={phone} alt="img/phone" />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex flex-row gap-2 text-lg items-center justify-center">
                <img src={print} alt="img/print" />
                <p>(123) 456-7890</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-5 text-lg items-center justify-center">
              <p>Social Media</p>
              <div className="flex flex-row gap-5 text-lg items-center justify-center">
                <img src={face} alt="img/face" />
                <img src={twit} alt="img/twit" />
                <img src={In} alt="img/linkedIn" />
                <img src={insta} alt="img/insta" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full md:flex-row flex-col justify-around items-center gap-5">
        <div className="flex gap-5 sm:flex-row flex-col uppercase select-none">
          <p className="cursor-pointer hover:underline transition-all duration-300 ease-in-out">
            About us
          </p>
          <p className="cursor-pointer hover:underline transition-all duration-300 ease-in-out">
            Contact us
          </p>
          <p className="cursor-pointer hover:underline transition-all duration-300 ease-in-out">
            Help
          </p>
          <p className="cursor-pointer hover:underline transition-all duration-300 ease-in-out">
            Privacy Policy
          </p>
          <p className="cursor-pointer hover:underline transition-all duration-300 ease-in-out">
            Disclaimer
          </p>
        </div>
        <div>
          <p>Copyright © 2022 • ABC Company.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
