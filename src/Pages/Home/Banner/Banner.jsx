import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img6 from '../../../assets/img6.png'


const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-[700px]">
        {/* background image */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('https://i.ibb.co/jVG9sBf/img5.jpg')] bg-cover bg-center bg-no-repeat h-[700px] md:h-[700px]"></div>
        {/* white overlay */}
        <div className="absolute top-0 right-0 md:right-0 lg:right-0 bottom-0 left-0 bg-black opacity-70 "></div>
        <div
          className="relative ml-[19px] md:ml-[10px] lg:ml-[40px] p-2"
          data-aos="zoom-in"
        >
          <div className="absolute mt-[180px] md:mt-[140px]  lg:mt-[150px] lg:w-[550px] mx-auto md:ml-[0px] lg:ml-[0px] text-left ">
            <h1 className=" text-white text-5xl md:text-5xl lg:text-4xl font-xl mb-[10px] md:mb-[20px] lg:mb-[30px] font-bold">
            TechDiscover: Unveiling the Latest in Innovation
            </h1>
            <p className="text-sm md:text-xl lg:text-sm font-semibold mb-[10px] md:mb-[20px] md:mt-[10px] lg:mt-[30px] text-gray-300">
            Explore and share the forefront of technology with our platform, where users discover and discuss the latest innovations in the world of tech products.
            </p>
            <button className="btn bg-[#3a86ff] rounded-none border-none w-[200px] text-white font-bold text-lg">
              GET STARTED
            </button>
            <div className='flex gap-4 mt-[50px]'>
                <img className="w-[150px] h-[100px] border-2 border-yellow-600" src={img1} alt="" />
                <img className="w-[150px] h-[100px] border-2 border-yellow-600" src={img2} alt="" />
                <img className="w-[150px] h-[100px] border-2 border-yellow-600" src={img3} alt="" />
                <img className="w-[150px] h-[100px] border-2 border-yellow-600" src={img6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
