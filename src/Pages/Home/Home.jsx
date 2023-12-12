import Banner from "./Banner/Banner";
import CouponSlider from "./CouponSlider/CouponSlider";
import FAQ from "./FAQ/FAQ";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import NeedHelp from "./NeedHelp/NeedHelp";
import TrendingProducts from "./TrendingProducts/TrendingProducts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            <TrendingProducts></TrendingProducts>
            <CouponSlider></CouponSlider>
            <FAQ></FAQ>
            <NeedHelp></NeedHelp>
        </div>
    );
};

export default Home;