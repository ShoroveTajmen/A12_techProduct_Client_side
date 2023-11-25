import { Link } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyProducts = () => {
  const [products] = useProduct();
  const [tags] = products;
  console.log(tags);
  return (
    <div>
      {products.slice(0, 5).map((product) => (
        <div
          key={product._id}
          className="card card-compact w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.OwnerName}</h2>
            <h1>{product.productName}</h1>
            <p>{product.OwnerEmail}</p>
            <h1>{product.createdAt}</h1>
            <div className="flex gap-2">
              <h1>{product.tags[0]}</h1>
              <h1>{product.tags[1]}</h1>
              <h1>{product.tags[2]}</h1>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">{product.upVote}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProducts;
