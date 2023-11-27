
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const ReportedProduct = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  //using tanstack query to get data
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["userProducts"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allProducts?status=pending`);
      console.log(res.data);
      return res.data;
    },
  });
  //   console.log(data)
  if (isLoading) {
    return <p>Hello</p>;
  }
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
                <th>View Details</th>
                <th>Delete Product</th>
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
                      //   onClick={() => handleMarksFeatured(item?._id)}
                      className="btn bg-red-600 text-white border-none"
                    >
                      Delete
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

export default ReportedProduct;
