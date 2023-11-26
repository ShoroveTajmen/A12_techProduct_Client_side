/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import { FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyProducts = () => {
  const axiosSecure = useAxiosSecure();
  const [products, isLoading, refetch] = useProduct();
  console.log(refetch);
  const { user } = useAuth();
  const myProducts = products.filter((item) => item.OwnerEmail === user.email);

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/product/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          //refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <div>
        <div className="overflow-x-auto bg-white shadow-xl">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-lg text-blue-700">
                <th>#</th>
                <th>Product Name</th>
                <th>Votes</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {myProducts.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td className="w-[270px] ">{item.productName}</td>
                  <td className="">{item.upVote}</td>
                  <td className="text-left">{item.status}</td>
                  <td>
                    <Link to={`/dashboard/updateProduct/${item._id}`}>
                      {" "}
                      <button className="btn btn-ghost btn-sm bg-blue-500">
                        <MdEditSquare className="text-white "></MdEditSquare>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg "
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
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

export default MyProducts;
