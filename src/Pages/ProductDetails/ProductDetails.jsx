import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FcBrokenLink } from "react-icons/fc";
import { BsFillCalendarDateFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaVoteYea } from "react-icons/fa";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  const { user } = useAuth();

  //using tanstack query to get data
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${id}`);
      console.log(res.data);
      return res.data;
    },
  });
  //   console.log(data)
  if (isLoading) {
    return <p>Hello</p>;
  }

  const handleUpVote = (id) => {
    console.log("clicked");
    axiosSecure
      .patch(`/upvote/${id}`, {
        userEmail: user.email,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Vote done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="flex justify-around gap-6 items-center mt-[100px] w-[1200px] mx-auto">
          <div className="card w-[700px] bg-base-100 rounded-none border-4 border-[#3a86ff] h-[700px]">
            <figure className="px-10 pt-10">
              <img
                src={data?.productPic}
                alt="Shoes"
                className="rounded-xl w-[350] h-[200px] bg-black"
              />
            </figure>
            <div className="ml-[100px] mt-[30px] text-left">
              {" "}
              <h2 className="font-bold text-xl flex gap-1">
                <FcBrokenLink className="mt-1"></FcBrokenLink>
                {data?.productName}
              </h2>
              <h1 className="flex gap-2 font-bold mt-2 mb-2">
                <BsFillCalendarDateFill className="mt-1 text-[#3a86ff]"></BsFillCalendarDateFill>
                {data?.createdAt.slice(0, 10)}
              </h1>
              <p className="text-sm font-semibold">{data?.description}</p>
              <div className="badge badge-secondary font-bold p-2 mt-[30px]">TAGS</div>
              <div className="flex gap-2">
                {data?.tags.map((tag, i) => (
                  <h2
                    key={i}
                    className="font-bold text-sm border-2 border-blue-700 p-1 mt-2"
                  >
                    {tag}
                  </h2>
                ))}
              </div>
              <h1 className="mt-2 font-bold ">
                For More Details:
                <a href={data?.link}>
                  <span className="ml-2 text-blue-700 font-bold underline">
                    Click Here
                  </span>
                </a>
              </h1>
              <div className="flex gap-6">
                {user?.email === data?.OwnerEmail ? (
                  <button className="flex gap-2 mt-4 btn btn-disabled rounded-none">
                    <FaVoteYea className=" text-[30px] text-white"></FaVoteYea>
                    <h1 className="font-bold text-[20px] text-[#de369d]">
                      {data?.upVote}
                    </h1>
                  </button>
                ) : !user?.email ? (
                  <Link to="/login">
                    {" "}
                    <button className="flex gap-2 mt-4 btn bg-black rounded-none">
                      <FaVoteYea className=" text-[30px] text-[#3a86ff]"></FaVoteYea>
                      <h1 className="font-bold text-[20px] text-[#de369d]">
                        {data?.upVote}
                      </h1>
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleUpVote(data._id)}
                    className="flex gap-2 mt-4 btn bg-black rounded-none"
                  >
                    <FaVoteYea className=" text-[30px] text-[#3a86ff]"></FaVoteYea>
                    <h1 className="font-bold text-[20px] text-[#de369d]">
                      {data?.upVote}
                    </h1>
                  </button>
                )}
                <button className="btn mt-4 bg-red-500 text-white text-[15px] font-bold rounded-none">
                  Report Product
                </button>
              </div>
            </div>
          </div>
    

        {/* review form */}
        <div style={{borderRadius: '100px 0px 100px 0px'}} className=" w-[400px] h-[350px] bg-white p-4 ">
            <h1 className="text-[30px] text-center font-bold text-[#ff006e]">Give A Review</h1>
          <form>
            {/* product name and product img */}
            <div className="form-control w-[350px] ml-4 ">
              <label className="label">
                <span className="label-text text-blue-600 font-bold">
                  Make Your Comment
                </span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="comment"
                  placeholder="Your Comment"
                  className="input input-bordered rounded-none  w-full"
                />
              </label>
            </div>
            <div className="form-control w-[350px] ml-4 ">
              <label className="label">
                <span className="label-text text-blue-600 font-bold">
                  Rate Out of 5
                </span>
              </label>
              <label className="">
                <input
                  type="number"
                  name="rating"
                  placeholder="Rate the product"
                  className="input input-bordered rounded-none  w-full"
                />
              </label>
            </div>
            <input
              type="submit"
              value="Add Review"
              className=" btn  bg-[#ff006e] font-bold text-white uppercase mt-4 ml-4"
            />
          </form>
        </div>
      </div>

      {/* See all review section */}
      <div>
        <div className="h-[200px] w-[300px] ml-[40px] bg-primary text-primary-content rounded-xl mt-[200px]">
          <div className="p-4">
            <div className="flex gap-3">
              {" "}
              <img
                className="w-[50px] h-[50px] rounded-full"
                src="https://i.ibb.co/bgBq18w/11.jpg"
                alt=""
              />
              <p className="mt-4 font-bold text-lg">Shorove Tajmen</p>
            </div>
            <h1 className="mt-2 text-sm">
              The Lenovo ThinkPad T460s offers a perfect blend of portability
            </h1>
            <Rating style={{ maxWidth: 180 }} value={3} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
