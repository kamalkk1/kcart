
import { useParams } from "react-router-dom";
import useProduct from "../utils/useProduct";
import Shimmer from "./Shimmer";


const ProductInfo = () => {
  const { proId } = useParams();
  console.log('proId:', proId);


  const product = useProduct();

  return !product ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Product info: {proId}</h1>
       
        <img src={product?.image} />
        <h3>{product?.title}</h3>
        <h3>{product?.description}</h3>
        <h3>{product?.price} stars</h3>
        <h3>{product?.category}</h3>
      </div>
    </div>
  );
};

export default ProductInfo;