import useAuth from "../../../hooks/useAuth";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GoUnverified } from "react-icons/go";

const UserHome = () => {
  const { user } = useAuth();
  console.log(user.email);
  console.log(user.displayName);
  console.log(user.photoURL);
  return (
    <div>
      <div className="card w-[700px] h-[700px] bg-base-100 shadow-xl">
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
        <div className="flex justify-center mt-[50px]">
          <h1 className="bg-blue-700 text-white w-[248px] p-2">
            Please Subscribe:{" "}
            <span className="bg-[#ff006e] p-[10px]">$100</span>
          </h1>
        </div>
        <div className="ml-[225px] justify-center mt-[20px]">
          <h1 className="bg-blue-700 text-white w-[230px] p-2">
            Subscription Status 
          </h1>
          <h1 className="flex mb-[12px] text-[#ff006e] font-bold ml-[70px]"><RiVerifiedBadgeFill className="mt-[4px]"></RiVerifiedBadgeFill> Verified</h1>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
