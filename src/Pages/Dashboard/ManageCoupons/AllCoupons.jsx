import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAllCoupons from "../../../hooks/useAllCoupons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllCoupons = () => {
  //fetch payment details based on specific email
  const [coupons, refetch] = useAllCoupons();
  const axiosSecure = useAxiosSecure();

  const deleteCoupon = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/coupon/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Coupon has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1000px] mx-auto text-white">
        {coupons?.map((coupon) => (
          <div
            key={coupon._id}
            className="h-[200px] w-[300px] ml-[40px] bg-primary text-primary-content rounded-xl mt-[50px] border-2 border-[#fcca46]"
          >
            <div className="p-4">
              <div className="font-bold">
                <h1>
                  <span className="text-yellow-500">Coupon Code:</span>{" "}
                  {coupon?.code}
                </h1>
                <p className="text-yellow-500">{coupon?.description}</p>
                <h1>
                  <span className="text-yellow-500">Expire Date :</span>{" "}
                  {coupon?.date}
                </h1>
                <h1>
                  <span className="text-yellow-500">Discout Amount:</span>{" "}
                  {coupon?.amount}
                </h1>
              </div>
              <div className="mt-2">
                <button
                  onClick={() => {
                    document.getElementById(coupon._id).showModal();
                  }}
                  className="btn btn-sm mr-1 bg-yellow-600 text-white border-none"
                >
                  View
                </button>
                <dialog id={coupon._id} className="modal">
                  <div className="modal-box text-center">
                    <img
                      className=""
                      src="https://i.ibb.co/KK1W693/offer.jpg"
                      alt=""
                    />
                    <h1 className="text-3xl font-bold bg-red-600">
                      Get {coupon?.amount}% Discount
                    </h1>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-primary ">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>

                <Link to={`editCoupon/${coupon?._id}`}>
                  <button className="btn btn-sm mr-1 bg-green-600 text-white border-none">
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => deleteCoupon(coupon._id)}
                  className="btn btn-sm bg-red-700 text-white border-none"
                >
                  Delete Coupon
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCoupons;
