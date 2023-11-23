import {
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
  FaPinterest,
  FaGooglePlusG,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="">
        <div className="bg-black h-[1400px] md:h-[700px] lg:h-[500px] text-gray-400 ">
          {/* footer container div */}
          <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 ml-[50px] md:ml-[10px] lg:ml-[0px] pt-[100px] ">
            {/* 1st part */}
            <div className="col-span-2 w-[300px] md:w-[100px] lg:w-[300px] ">
              <img
                className="w-[500px] md:w-[100px] lg:w-[240px] h-[100px]  pl-[20px] rounded-xl"
                src="https://i.ibb.co/4g5CCbt/logo1.jpg"
                alt=""
              />
              <h1 className="btn btn-ghost text-[30px] text-[#3a86ff]">
                Byte <span className="text-[#ff006e]">Blitz</span>
              </h1>
            </div>
            {/* 2nd part */}
            <div className="col-span-2 w-[300px] md:w-[200px] lg:w-[300px] text-gray-400">
              <h1 className="text-3xl font-bold mb-3 md:mb-7 text-[#3a86ff]">
                Company
              </h1>
              <p>My Account</p>
              <h1 className="mt-2">About us</h1>
              <h1 className="mt-2">Leadership</h1>
              <h1 className="mt-2">Investors</h1>
              <h1 className="mt-2">Careers</h1>
              <h1 className="mt-2 mb-8 lg:mb-0">Article & News</h1>
            </div>
            {/* 3rd part */}
            <div className="col-span-2 w-[300px] md:w-[100px] lg:w-[300px]">
              <h1 className="text-3xl font-bold mb-3 md:mb-7 text-[#3a86ff]">
                Support
              </h1>
              <div className="gap-2 ">
                {" "}
                <h1 className="mt-2">Help Center</h1>
                <h1 className="mt-2">Ticket Support</h1>
                <h1 className="mt-2">My Account</h1>
                <h1 className="mt-2">FAQ</h1>
                <h1 className="mt-2">Forum Community</h1>
              </div>
            </div>
            {/* 4th part */}
            <div className="col-span-2 w-[300px] md:w-[150px] lg:w-[300px]">
              <h1 className="text-3xl font-bold mt-8 md:mt-[0px] lg:mt-0 mb-3 md:mb-7 text-[#3a86ff]">
                STAY WITH US
              </h1>
              <p className="">
                CircuitCrafters: Crafting tomorrow's tech today, committed to
                excellence in engineering and pushing the boundaries of
                innovation.
              </p>
              <div
                className="flex gap-3 mt-5 text-[#3a86ff]"
              >
                {" "}
                <h1>
                  <FaFacebook></FaFacebook>
                </h1>
                <h1>
                  <FaTwitterSquare></FaTwitterSquare>
                </h1>
                <h1>
                  <FaLinkedin></FaLinkedin>
                </h1>
                <h1>
                  <FaPinterest></FaPinterest>
                </h1>
                <h1>
                  <FaGooglePlusG></FaGooglePlusG>
                </h1>
                <h1>
                  <FaInstagramSquare></FaInstagramSquare>
                </h1>
              </div>
            </div>
          </div>
          <h1 className="mt-[100px] md:mt-[50px] lg:mt-[50px] text-center font-semibold">
            &copy; 2023 Latest Tech Products Explore. All Rights Reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
