import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import useAuth from "../../../hooks/useAuth";
import moment from "moment/moment";

const AddProducts = () => {
  const [tags, setTags] = useState([]);
//   console.log(tags)
  const {user} = useAuth();
  const OwnerName = user.displayName;
  const OwnerImage = user.photoURL;
  const OwnerEmail = user.email;

  const date = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log(date);

  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const productName = form.productName.value;
    const productPic = form.productPic.value;
    // const tags = form.tags.value;
    const link = form.link.value;
    const description = form.description.value;

    const newProduct = {
      productName,
      productPic,
      tags,
      link,
      description,
      OwnerName,
      OwnerImage,
      OwnerEmail,
      status: "pending",
      upVote: 0,
      date
      
    };
    console.log(newProduct);

    // //send newProduct data to the server
    // fetch("https://brand-shop-server-side-kohl.vercel.app/product", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newProduct),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire("Product Added Successful", "success");
    //       form.reset();
    //     }
    //   });
  };
  return (
    <div className="shadow-lg p-24 lg:w-[1100px] mx-auto mt-12 mb-12">
      <h2 className="text-4xl mb-8 lg:mb-0 font-bold uppercase text-[#144272]">
        Add a Product
      </h2>
      <form onSubmit={handleAddProduct}>
        {/* product name and product img */}
        <div className="flex mb-8">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text text-blue-600 font-bold">
                Product Name
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="productName"
                placeholder="Product Name"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
          <div className="form-control lg:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-blue-600 font-bold">
                Product Pic
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="productPic"
                placeholder="Product Pic"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
        </div>
        {/* product tags and external Links */}
        <div className="flex mb-8">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text text-blue-600 font-bold">
                Product Tags
              </span>
            </label>
            <label className="">
              <TagsInput
                value={tags}
                onChange={setTags}
                name="tags"
                placeHolder="Enter Product Tags"
              />
              <em>press enter to add new tag</em>
            </label>
          </div>
          <div className="form-control lg:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-blue-600 font-bold">
                External Link
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="link"
                placeholder="EXternal Link"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo url */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-blue-600 font-bold">
                Product Description
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="description"
                placeholder="Product Description"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Product"
          className=" btn  bg-[#3a86ff] font-bold text-white uppercase lg:w-[400px] ml-[50px] lg:ml-[250px]"
        />
      </form>
    </div>
  );
};

export default AddProducts;
