import Banner from "./Banner/Banner";
import CouponSlider from "./CouponSlider/CouponSlider";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import TrendingProducts from "./TrendingProducts/TrendingProducts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            <TrendingProducts></TrendingProducts>
            <CouponSlider></CouponSlider>
        </div>
    );
};

export default Home;