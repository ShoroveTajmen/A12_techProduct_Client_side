import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useModerator from "../../../hooks/useModerator";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isModerator] = useModerator();
  // console.log(user);
  return (
    <div>
      <nav className="flex flex-col md:flex-row md:justify-between md:items-center py-3 md:py-2  md:px-5 md:ml-0 bg-[#0A2647]">
        <div className="flex">
          <h1 className="btn btn-ghost text-[30px] text-[#3a86ff] ml-[120px] md:ml-[0px] lg:ml-[0px]">
            Byte <span className="text-[#ff006e]">Blitz</span>
          </h1>
        </div>
        {/* navbar link page route */}
        <div className="lg:w-1/3 lg:ml-[300px] ml-[70px]">
          <ul className="flex gap-5 font-bold  flex-row md:flex-row md:justify-center md:items-center text-white text-lg ml-[15px] md:ml-[0px] lg:ml-[0px]">
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
            {user && isAdmin && (
              <li>
                <NavLink
                  to="/dashboard/statistics"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#3a86ff] underline"
                      : ""
                  }
                >
                  DASHBOARD
                </NavLink>
              </li>
            )}
            {user && !isAdmin && !isModerator && (
              <li>
                <NavLink
                  to="/dashboard/myProfile"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#3a86ff] underline"
                      : ""
                  }
                >
                  DASHBOARD
                </NavLink>
              </li>
            )}
            {user && isModerator && (
              <li>
                <NavLink
                  to="/dashboard/productReviewQueue"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#3a86ff] underline"
                      : ""
                  }
                >
                  DASHBOARD
                </NavLink>
              </li>
            )}
        
          </ul>
        </div>

        {/* registration and logggin part */}
        <div className="flex  lg:w-[700px] font-bold text-lg flex-col md:flex-row md:justify-end  md:items-center ">
          {/* registration */}
          {/* <div className="mb-3 md:mb-0 ml-[180px] md:ml-0 mr-[30px]">
            <Link to="/register">
              <button className=" btn-sm bg-[#3a86ff] text-white uppercase font-bold">
                Registration
              </button>
            </Link>
          </div> */}

          {/* profile pic and username and login part */}
          <div className="">
            {user?.email ? (
              <div className="dropdown dropdown-end ml-[190px] md:ml-[0px] lg:ml-[0px]">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar border-2 border-[#3a86ff]"
                >
                  <div className="w-10 rounded-full ">
                    <img
                      className="text-white"
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <h1 className="justify-between ml-2"> {user.displayName}</h1>
                  {user && isAdmin && (
                    <li className="bg-[#3a86ff] text-white font-bold mt-2">
                      <Link to="/dashboard/statistics">DashBoard</Link>
                    </li>
                  )}

                  {user && !isAdmin && !isModerator && (
                    <li className="bg-[#3a86ff] text-white font-bold mt-2">
                      <Link to="/dashboard/myProfile">DashBoard</Link>
                    </li>
                  )}
                  {user && isModerator  && (
                    <li className="bg-[#3a86ff] text-white font-bold mt-2">
                      <Link to="/dashboard/productReviewQueue">DashBoard</Link>
                    </li>
                  )}

                  <li>
                    <button
                      onClick={logOut}
                      className="btn btn-sm bg-[#3a86ff] text-white font-bold rounded-none mt-2"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className=" btn-sm bg-[#3a86ff] text-white uppercase font-bold lg:ml-[5px] md:ml-0 ml-[190px]">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
