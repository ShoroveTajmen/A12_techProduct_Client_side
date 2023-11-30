import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AllCoupons from "./AllCoupons";
import useAllCoupons from "../../../hooks/useAllCoupons";

const ManageCoupons = () => {
  const [coupons, refetch] = useAllCoupons();  
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    console.log("clickeed");

    const form = e.target;
    const code = form.code.value;
    const date = form.date.value;
    const description = form.description.value;
    const amount = form.amount.value;

    const couponDetails = {
      code,
      date,
      description,
      amount,
    };
    console.log(couponDetails);

    axiosSecure.post("/coupons", couponDetails).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        form.reset();
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: 'Coupon added successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      {/* add coupon form */}
      <div className=" w-[400px] mt-[50px] md:w-[400px] lg:w-[400px] h-[500px] bg-gray-400 p-2 mx-auto ml-[10px] md:ml-[80px] lg:ml-[400px]">
        <h1 className="text-[30px] text-center font-bold text-[#ff006e]">
          Add a coupon
        </h1>
        <form onSubmit={handleCouponSubmit}>
          {/* coupon code */}
          <div className="form-control w-[350px] ml-4 ">
            <label className="label">
              <span className="label-text text-blue-600 font-bold">
                Coupon Code
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="code"
                placeholder="Coupon Code"
                className="input input-bordered rounded-none  w-full"
              />
            </label>
          </div>
          <div className="form-control w-[350px] ml-4 ">
            <label className="label">
              <span className="label-text text-blue-600 font-bold">
                Expiry Date
              </span>
            </label>
            <label className="">
              <input
                type="date"
                name="date"
                placeholder="Expire Date"
                className="input input-bordered rounded-none  w-full"
              />
            </label>
          </div>
          <div className="form-control w-[350px] ml-4 ">
            <label className="label">
              <span className="label-text text-blue-600 font-bold">
                Coupon Description
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered rounded-none  w-full"
              />
            </label>
          </div>
          <div className="form-control w-[350px] ml-4 ">
            <label className="label">
              <span className="label-text text-blue-600 font-bold">
                Discount Amount
              </span>
            </label>
            <label className="">
              <input
                type="number"
                name="amount"
                placeholder="Discount Amount"
                className="input input-bordered rounded-none  w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Add Coupon"
            className=" btn  bg-[#ff006e] font-bold text-white uppercase mt-4 ml-4 rounded-none border-none"
          />
        </form>
      </div>

      {/* show all coupon here */}
      <AllCoupons></AllCoupons>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[1300px] mx-auto text-white">
        <div className="h-[200px] w-[300px] ml-[40px] bg-primary text-primary-content rounded-xl mt-[50px] border-2 border-[#fcca46]">
          <div className="p-4">
            <div className="font-bold">
              <h1>Coupon Code: 2345</h1>
              <p>this is description kkkkkkkkkkkkkkkkkkkkk</p>
              <h1>Expire Date : 22/22/22</h1>
              <h1>Discout Amount: 50</h1>
            </div>
            <div className="mt-2">
              <button className="btn btn-sm mr-1 bg-yellow-600 text-white border-none">
                View
              </button>
              <button className="btn btn-sm mr-1 bg-green-600 text-white border-none">
                Edit
              </button>
              <button className="btn btn-sm bg-red-700 text-white border-none">
                Delete Coupon
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ManageCoupons;
