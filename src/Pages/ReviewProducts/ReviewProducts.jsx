import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const ReviewProducts = ({ id }) => {
  console.log(id);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  //using tanstack query to get specific product productData
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["productReview"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/productReview/${id}`);
      console.log(res.data);
      return res.data;
    },
  });
  if (isLoading) {
    return <p>Hello</p>;
  }
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[1300px] mx-auto ">
        {data && data.length > 0 ? (
          data.map((review) => (
            <div
              key={review._id}
              className="h-[200px] w-[300px] ml-[40px] bg-primary text-primary-content rounded-xl mt-[50px]"
            >
              <div className="p-4">
                <div className="flex gap-3">
                  {" "}
                  <img
                    className="w-[50px] h-[50px] rounded-full"
                    src={review?.userImage}
                    alt=""
                  />
                  <p className="mt-4 font-bold text-lg">{review?.userName}</p>
                </div>
                <h1 className="mt-2 text-sm">
                  {review?.description}
                </h1>
                <Rating style={{ maxWidth: 180 }} value={review?.rating} readOnly />
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-[#c97d4a] text-4xl font-bold mt-[50px] mb-[100px]">
            No review found based on this Product. Check back later for new
            arrivals !!
          </p>
        )}
      </div>
    </div>
  );
};

export default ReviewProducts;
