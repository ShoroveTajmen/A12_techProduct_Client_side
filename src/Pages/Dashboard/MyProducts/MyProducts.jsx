/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import { FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";

const MyProducts = () => {
  const [products, isLoading, refetch] = useProduct();
  const {user} = useAuth();
console.log(products);

const myProducts = products.filter(item => item.OwnerEmail === user.email);
console.log(myProducts)

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
                    <td className="w-[270px] ">
                      {item.productName}
                    </td>
                    <td className="">{item.upVote}</td>
                    <td className="text-left">{item.status}</td>
                    <td>
                      <Link to={`/dashboard/updateItem/${item._id}`}>
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
                ) 
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
