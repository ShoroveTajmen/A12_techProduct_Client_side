import Banner from "./Banner/Banner";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import TrendingProducts from "./TrendingProducts/TrendingProducts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            <TrendingProducts></TrendingProducts>
        </div>
    );
};

export default Home;