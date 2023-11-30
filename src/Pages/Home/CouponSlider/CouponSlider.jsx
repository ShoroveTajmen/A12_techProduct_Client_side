import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import useAllCoupons from "../../../hooks/useAllCoupons";

const CouponSlider = () => {
  const [coupons, refetch] = useAllCoupons();
  return (
    <div className="mt-[100px]">
      <img className="w-[450px] mx-auto" src="https://i.ibb.co/bH1TGD6/sale.jpg" alt="" />
      <div className="text-black lg:w-[600px] lg:h-[300px] md:h-[300px] h-[330px] mx-auto bg-white">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {coupons?.map((coupon) => (
            <SwiperSlide key={coupon._id}>
              <div className="flex flex-col items-center my-16 mx-24">
                <div className="font-bold text-2xl">
                  <h1>
                    <span className="text-[#5c0099]">Coupon Code:</span>{" "}
                    {coupon?.code}
                  </h1>
                  <p className="text-[#5c0099]">{coupon?.description}</p>
                  <h1>
                    <span className="text-[#5c0099]">Expire Date :</span>{" "}
                    {coupon?.date}
                  </h1>
                  <h1>
                    <span className="text-[#5c0099]">Discout Up To:</span>{" "}
                   <span className="text-6xl text-[#ff0000]"> {coupon?.amount}%</span>
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CouponSlider;
