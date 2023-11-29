import { useQuery } from "@tanstack/react-query";
import {   useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EditCoupon = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  //using tanstack query to get specific coupons details
  const {
    data: couponData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["couponValue"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/coupons/${id}`);
      // console.log(res.data);
      return res.data;
    },
  });
  if (isLoading) {
    return <p>Hello</p>;
  }
  const { _id, amount, code, date, description } = couponData;

  const handleUpdateCoupon = async (e) => {
    e.preventDefault();

    const form = e.target;
    const code = form.code.value
    const date = form.date.value;
    const description = form.description.value;
    const amount = form.amount.value;

    const updateCoupon = {
        code,
        date,
        description,
        amount,
      };
      console.log(updateCoupon);

          //send updateProduct data to the server
    const couponRes = await axiosSecure.patch(`/updateCoupon/${_id}`, updateCoupon);
    console.log(couponRes.data);
    if(couponRes.data.modifiedCount > 0){
        form.reset();
        refetch();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: 'Coupon update successfully',
            showConfirmButton: false,
            timer: 1500,
          });
         navigate("/dashboard/manageCoupons");
    }
  }

  return (
    <div>
      <div className=" w-[400px] h-[500px] bg-gray-400 p-4 mx-auto">
        <h1 className="text-[30px] text-center font-bold text-[#ff006e]">
          Add a coupon
        </h1>
        <form onSubmit={handleUpdateCoupon}>
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
                defaultValue={code}
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
                defaultValue={date}
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
                defaultValue={description}
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
                defaultValue={amount}
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
    </div>
  );
};

export default EditCoupon;
