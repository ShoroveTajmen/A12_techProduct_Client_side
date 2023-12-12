import Banner from "./Banner/Banner";
import CouponSlider from "./CouponSlider/CouponSlider";
import FAQ from "./FAQ/FAQ";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import TrendingProducts from "./TrendingProducts/TrendingProducts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            <TrendingProducts></TrendingProducts>
            <CouponSlider></CouponSlider>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;