import useAuth from "../../../hooks/useAuth";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UserHome = () => {
  const { user } = useAuth();
  // console.log(user.email);
  // console.log(user.displayName);
  // console.log(user.photoURL);

  //fetch payment details based on specific email
  const axiosSecure = useAxiosSecure();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["paymentDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  const paymentsUser = payments[0]?.email;
  const status = payments[0]?.status;
  // console.log(paymentsUser, status);

  return (
    <div>
      <div className="card w-[700px] h-[500px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="rounded-full w-[200px] h-[200px] border-4 border-blue-700"
          />
        </figure>
        <div className=" items-center text-center">
          <h2 className="text-xl font-bold mt-4">
            <span className="text-blue-600 font-bold text-xl">Name:</span>
            {user.displayName}
          </h2>
          <p className="text-xl font-bold mb-4">
            <span className="text-blue-600 font-bold text-xl">Email:</span>
            {user.email}
          </p>
        </div>
        <div>
          {paymentsUser === user.email && status === "verified" ? (
            <>
              <div>
                <h1 className="text-center text-red-600 text-lg font-bold flex justify-center">
                  Verified User<MdVerified className="mt-1 ml-2 text-blue-600"></MdVerified>
                </h1>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="flex justify-center mt-[20px]">
                {" "}
                <h1 className="bg-blue-700 text-white w-[150px] p-2 font-bold text-center text-lg">
                  Subscribe!
                </h1>
                <Link to="/dashboard/payment">
                  {" "}
                  <button className="bg-[#ff006e] p-[10px] text-white font-bold btn rounded-none">
                    Pay $100
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
        {/* <div className="ml-[225px] justify-center mt-[20px]">
          <h1 className="bg-blue-700 text-white w-[230px] p-2">
            Subscription Status
          </h1>
          <h1 className="flex mb-[12px] text-[#ff006e] font-bold ml-[70px]">
            <RiVerifiedBadgeFill className="mt-[4px]"></RiVerifiedBadgeFill>{" "}
            Verified
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default UserHome;
