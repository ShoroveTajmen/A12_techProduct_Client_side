/* eslint-disable no-undef */
import { useState } from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FcBrokenLink } from "react-icons/fc";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaVoteYea } from "react-icons/fa";

const Products = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  //   const [, refetch] = useProduct();

  //pagination related
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const { count } = useLoaderData();
  const numberOfPages = Math.ceil(count / itemsPerPage);
  console.log(numberOfPages);
  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);

  //using tanstack query to get all data
  const axiosPublic = useAxiosPublic();
  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["productsBytags", search,currentPage, numberOfPages],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/productsByTags?search=${search}&page=${currentPage}&size=${itemsPerPage}`
      );
    //   refetch();
      return res.data;
    },
  });
  if (isLoading) {
    return <p>Hello</p>;
  }

  //product search function
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    // console.log(searchText);
    setSearch(searchText);
    refetch();
  };
  //   console.log(search);

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

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
    refetch();
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      refetch();
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      {
        setCurrentPage(currentPage + 1);
        refetch();
      }
    }
  };

  const handlePage = (page) => {
    setCurrentPage(page)
    refetch();

  }

  return (
    <div>
      {/* search portion */}
      <div className="p-10 flex justify-center">
        <form onSubmit={handleSearch}>
          <input
            placeholder=" search here"
            type="text"
            name="search"
            id=""
            className="w-[500px] h-[50px] border-2 border-blue-300 relative"
          />
          <input
            type="submit"
            value="Search"
            className="btn rounded-none bg-[#ff006e] border-none text-white font-bold text-[20px]"
          />
        </form>
      </div>

      {/* show all data */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:gap-5  md:w-[770px] w-[350px] lg:w-[1500px] mx-auto mt-[30px] md:mt-[70px] md:mb-[70px]">
          {products.map((product) => (
            <div
              key={product._id}
              className="card w-[365px] bg-base-100 rounded-none border-4 border-[#3a86ff] h-[530px]"
            >
              <figure className="px-10 pt-10">
                <img
                  src={product.productPic}
                  alt="Shoes"
                  className="rounded-xl w-[350] h-[200px] bg-black"
                />
              </figure>
              <div className="ml-[10px] mt-[30px] text-left">
                <Link to={`/product/${product._id}`}>
                  {" "}
                  <h2 className="font-bold text-xl flex gap-1">
                    <FcBrokenLink className="mt-1"></FcBrokenLink>
                    {product.productName}
                  </h2>
                </Link>
                <h1 className="flex gap-2 font-bold mt-2 mb-2">
                  <BsFillCalendarDateFill className="mt-1 text-[#3a86ff]"></BsFillCalendarDateFill>
                  {product.createdAt.slice(0, 10)}
                </h1>
                <div className="badge badge-secondary font-bold p-2">TAGS</div>
                <div className="flex gap-2">
                  {product.tags.map((tag, i) => (
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
                  <a href={product.link}>
                    <span className="ml-2 text-blue-700 font-bold underline">
                      Click Here
                    </span>
                  </a>
                </h1>
                {user?.email === product.OwnerEmail ? (
                  <button className="flex gap-2 mt-4 btn btn-disabled rounded-none">
                    <FaVoteYea className=" text-[30px] text-white"></FaVoteYea>
                    <h1 className="font-bold text-[20px] text-[#de369d]">
                      {product.upVote}
                    </h1>
                  </button>
                ) : !user?.email ? (
                  <Link to="/login">
                    {" "}
                    <button className="flex gap-2 mt-4 btn bg-black rounded-none">
                      <FaVoteYea className=" text-[30px] text-[#3a86ff]"></FaVoteYea>
                      <h1 className="font-bold text-[20px] text-[#de369d]">
                        {product.upVote}
                      </h1>
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleUpVote(product._id)}
                    className="flex gap-2 mt-4 btn bg-black rounded-none"
                  >
                    <FaVoteYea className=" text-[30px] text-[#3a86ff]"></FaVoteYea>
                    <h1 className="font-bold text-[20px] text-[#de369d]">
                      {product.upVote}
                    </h1>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pagination */}
      <div className=" text-red-700 text-center mb-[40px]">
        <p className="text-white">CurrentPage: {currentPage}</p>
        <button onClick={handlePrevPage} className="btn mr-[10px]">
          Prev
        </button>
        {pages.map((page) => (
          <button
            className={` text-pink-500 btn mr-[10px] ${
              currentPage === page ? "bg-[#3a86ff]" : ""
            }`}
            onClick={() => handlePage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <button onClick={handleNextPage} className="btn ml-[10px]">
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
