import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const CouponSlider = () => {
  return (
    <div className="mt-[100px]">
      <h1 className="text-white text-center mb-4">Grab Your Coupon</h1>
      <div className="text-black w-[500px] h-[300px] mx-auto bg-white">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="flex flex-col items-center my-16 mx-24">
              <p className="py-10">Slide 1</p>
              <h3 className="text-2xl text-orange-400">hhhhhhhhhhhhhhhhhhhh</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center my-16 mx-24">
              <p className="py-10">Slide 2</p>
              <h3 className="text-2xl text-orange-400">hhhhhhhhhhhhhhhhhhhh</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center my-16 mx-24">
              <p className="py-10">Slide 3</p>
              <h3 className="text-2xl text-orange-400">hhhhhhhhhhhhhhhhhhhh</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CouponSlider;
