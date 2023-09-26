
import { useParams } from "react-router-dom";
import useProduct from "../utils/useProduct";

import Shimmer from "./Shimmer";



const ProductInfo = () => {
  const { proId } = useParams();
  // console.log('proId:', proId);


  const product = useProduct(proId);

  return !product ? (
    <Shimmer />
  ) : (
    <div className="flex justify-center items-center h-screen">
  <div className="bg-white p-8 rounded-lg shadow-lg w-3/4">
    <h1 className="text-3xl font-semibold mb-4">Product Info: {proId}</h1>
    <img className="w-80 mb-4" src={product?.image} alt="Product Name" />
    <h3 className="text-xl font-semibold mb-2">{product?.title}</h3>
    <p className="text-gray-600 text-sm mb-4">{product?.description}</p>
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold">${product?.price}</h3>
      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
        {product?.category}
      </span>
    </div>
  </div>
</div>

  );
};

export default ProductInfo;
