import { NavLink, Outlet } from "react-router-dom";
import {
  FaAddressBook,
  FaHome,
  FaShoppingBasket,
  FaShoppingCart,
} from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { MdReportOff } from "react-icons/md";
import { PiChartBarFill } from "react-icons/pi";
import { PiUsersFourFill } from "react-icons/pi";
import { RiCoupon5Fill } from "react-icons/ri";
import useAdmin from "../../hooks/useAdmin";
import useModerator from "../../hooks/useModerator";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isModerator] = useModerator();
  return (
    <div>
      <div className="flex flex-col lg:flex-row md:flex-row">
        {/* dashboard side bar */}
        <div className="lg:w-64 md:w-64 w-full lg:min-h-screen md:min-h-screen lg:bg-[#004e89] md:lg:bg-[#004e89]">
          <ul className="lg:menu md:menu p-4 flex flex-row md:flex-col lg:flex-col">
            {/* Admin Portion */}
            {isAdmin && (
              <>
                <li className="font-bold  uppercase mt-2 text-white">
                  <NavLink to="/dashboard/statistics">
                    <PiChartBarFill className="text-yellow-400"></PiChartBarFill>
                    Statistics Exhibit
                  </NavLink>
                </li>

                <li className="font-bold  uppercase mt-2 text-white">
                  <NavLink to="/dashboard/manageUsers">
                    <PiUsersFourFill className="text-yellow-400"></PiUsersFourFill>
                    Manage Users
                  </NavLink>
                </li>

                <li className="font-bold  uppercase mt-2 text-white">
                  <NavLink to="/dashboard/manageCoupons">
                    <RiCoupon5Fill className="text-yellow-400"></RiCoupon5Fill>
                    Manage Coupons
                  </NavLink>
                </li>
              </>
            )}


              {/* Normal Users Portion */}
              {!isAdmin && !isModerator && (
              <>
                <li className="font-bold  uppercase  text-white mr-6">
                  <NavLink to="/dashboard/myProfile">
                    <FaAddressBook className="text-yellow-400"></FaAddressBook>
                    My Profile
                  </NavLink>
                </li>
                <li className="font-bold  uppercase mt-2 text-white mr-6">
                  <NavLink to="/dashboard/addProducts">
                    <FaShoppingBasket className="text-yellow-400"></FaShoppingBasket>
                    Add Products
                  </NavLink>
                </li>
                <li className="font-bold  uppercase mt-2 text-white">
                  <NavLink to="/dashboard/myProducts">
                    <FaShoppingCart className="text-yellow-400"></FaShoppingCart>
                    My Products
                  </NavLink>
                </li>
              </>
            )}


             {/* Moderator Portion */}
             {isModerator && (
              <>
                <li className="font-bold  uppercase mt-2 text-white">
                  <NavLink to="/dashboard/productReviewQueue">
                    <MdOutlineReviews className="text-yellow-400"></MdOutlineReviews>
                    Product Review Queue
                  </NavLink>
                </li>

                <li className="font-bold  uppercase mt-2 text-white">
                  <NavLink to="/dashboard/reportedProduct">
                    <MdReportOff className="text-yellow-400"></MdReportOff>
                    Reported Products
                  </NavLink>
                </li>
              </>
            )}

           
            {/* Shared NavLink */}
            <div className="divider divider-warning w-[230px] mx-auto hidden lg:block bg-yellow-400 md:block h-[6px]"></div>
            <li className="font-bold  uppercase mt-2 text-white">
              <NavLink to="/">
                <FaHome className="text-yellow-400"></FaHome>
                Home
              </NavLink>
            </li>
          </ul>
        </div>

        {/* dashboard content */}
        <div className="lg:flex-1 lg:p-8 w-[400px] md:w-[500px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
