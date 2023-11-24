import { NavLink, Outlet } from "react-router-dom";
import { FaAddressBook, FaShoppingBasket, FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-[#004e89]">
          <ul className="menu p-4 ">
            <li className="font-bold  uppercase  text-white">
              <NavLink  to="/dashboard/myProfile"><FaAddressBook className="text-yellow-400"></FaAddressBook>My Profile</NavLink>
            </li>
            <li className="font-bold  uppercase mt-2 text-white">
              <NavLink  to="/dashboard/addProducts"><FaShoppingBasket className="text-yellow-400"></FaShoppingBasket>Add Products</NavLink>
            </li>
            <li className="font-bold  uppercase mt-2 text-white">
              <NavLink  to="/dashboard/myProducts"><FaShoppingCart className="text-yellow-400"></FaShoppingCart>My Products</NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
