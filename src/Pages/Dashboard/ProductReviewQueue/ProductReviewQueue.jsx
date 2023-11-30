import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { LuBookMarked } from "react-icons/lu";
import Swal from "sweetalert2";
import { useState } from "react";

const ProductReviewQueue = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  //using tanstack query to get data
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["userProducts"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allProducts?status=pending`);
      // console.log(res.data);
      return res.data;
    },
  });
    console.log(data)
  if (isLoading) {
    return <p>Hello</p>;
  }

  const handleAcceptProduct = async (id) => {
    // Make an API call to update the product status to 'accepted'
    await axiosSecure
      .patch(`/updateProductStatus1/${id}`, {
        status: "accepted",
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 1) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product Accepted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    // Refetch the data to update the UI
    refetch();
  };
 

  const handleRejectProduct = async (id) => {
      await axiosSecure.delete(`/deleteProduct/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Product Rejected",
            icon: "success",
          });
        }
      });
    
  };


  const handleMarksFeatured = async (id) => {
    await axiosSecure.post(`/marksFeatured/${id}`);
    // Show success message
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added to the featured collection",
      showConfirmButton: false,
      timer: 1500,
    });
    // Update the featuredProducts state
    setFeaturedProducts((prevFeaturedProducts) => [
      ...prevFeaturedProducts,
      id,
    ]);
    refetch();
  };

  return (
    <div>
      <div>
        <div className="overflow-x-auto bg-white shadow-xl md:w-[450px] lg:w-full w-[380px]  mb-[50px] ml-[20px] ">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-lg text-blue-700">
                <th>#</th>
                <th>Product Name</th>
                <th>View Details</th>
                <th>Featured Product</th>
                <th>Product Accept</th>
                <th>Product Reject</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td className="w-[270px] ">{item?.productName}</td>
                  <td className="">
                    {" "}
                    <Link to={`/product/${item?._id}`}>
                      {" "}
                      <button className="btn btn-ghost btn-sm bg-yellow-600 text-white">
                        View Product
                      </button>
                    </Link>
                  </td>
                  <td className="text-left">
                    {" "}
                   
                    <button
                      onClick={() => handleMarksFeatured(item?._id)}
                      disabled={featuredProducts.includes(item?._id)}
                      className={`btn  btn-sm ${
                        featuredProducts.includes(item?._id)
                          ?  "bg-gray-300 text-gray-500"
                          : "bg-pink-600 text-white"
                      }`}
                    >
                      <LuBookMarked className="text-white "></LuBookMarked>
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleAcceptProduct(item?._id)}
                      disabled={
                        item?.status === "accepted" ||
                        item?.status === "rejected"
                      }
                      className="btn btn-ghost btn-sm bg-green-600 text-white"
                    >
                      {item?.status}
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleRejectProduct(item?._id)}
                      disabled={
                        item?.status === "accepted" ||
                        item?.status === "rejected"
                      }
                      className="btn btn-ghost btn-sm bg-red-500 text-white"
                    >
                      {item?.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductReviewQueue;
