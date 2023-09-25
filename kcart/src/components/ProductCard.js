import { useDispatch } from "react-redux";
import { deleteItem } from "../utils/productSlice";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import useProduct from "../utils/useProduct";

import { useParams } from "react-router-dom";

const ProductCard = ({
    title,
    price,
    image,
    category,
}) => {
  const { user } = useContext(UserContext);
  const { proId } = useParams();
  const product = useProduct(proId);
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Dispatch the deleteItem action with the product id to remove it
    dispatch(deleteItem(product));
  };

  return (
    <div className="flex flex-wrap w-56 p-2 m-2 shadow-lg bg-green-50 gap-4 rounded-lg md:transform-none duration-700 hover:scale-110">
     <div className="overflow-hidden">
    <img src={image} alt={title} className="object-cover w-full h-48" />
  </div>
      <h2 className="font-bold text-xl">{title}</h2>
      <h3 className="text-lg text-green-500 font-semibold mt-2">$ {price} </h3>
      <br />
      <h4 className="font-bold text-sm text-gray-600 mt-2">{category}</h4>
      <h5 className="font-bold text-sm text-gray-600 mt-2">
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-600 border-solid "
        >
          Delete
        </button>
      </h5>
      <h5 className="font-bold">
        {user.name}
      </h5>
    </div>
  );
};

export default ProductCard;
