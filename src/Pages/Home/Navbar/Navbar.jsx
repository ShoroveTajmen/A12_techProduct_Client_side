import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row md:justify-between md:items-center py-3 md:py-2  md:px-5 md:ml-0 bg-[#0A2647]">
        <div className="flex">
          <h1 className="btn btn-ghost text-[30px] text-[#3a86ff]">
            Byte <span className="text-[#ff006e]">Blitz</span>
          </h1>
        </div>
        {/* navbar link page */}
        <div className="lg:w-1/3 lg:ml-[300px] ml-[70px]">
          <ul className="flex gap-5 font-bold  flex-row md:flex-row md:justify-center md:items-center text-white text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3a86ff] underline"
                    : ""
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3a86ff] underline"
                    : ""
                }
              >
                PRODUCTS
              </NavLink>
            </li>
          </ul>
        </div>

        {/* registration and logggin part */}
        <div className="flex  lg:w-[700px] font-bold text-lg flex-col md:flex-row md:justify-end  md:items-center ">
          {/* registration */}
          <div className="mb-3 md:mb-0 ml-[180px] md:ml-0 mr-[30px]">
            <Link to="/register">
              <button className=" btn-sm bg-[#3a86ff] text-white uppercase font-bold">
                Registration
              </button>
            </Link>
          </div>


        {/* profile pic and username and login part */}
          <div className="">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-[#3a86ff]">
                <div className="w-10 rounded-full ">
                  <img
                    className="text-white"
                    alt="Tailwind CSS Navbar component"
                    src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">User Name</a>
                </li>
                <li>
                  <a>DashBoard</a>
                </li>
                <li>
                  <button className="btn btn-sm bg-[#3a86ff] text-white font-bold">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
