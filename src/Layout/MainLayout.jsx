
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';
import Footer from '../Pages/Home/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="max-w-[1600px] mx-auto ">
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;