import { useState, useEffect } from "react";
import { FETCH_URL, productList } from "../constants";
import { useParams } from "react-router-dom";

const useProduct = () => {

  const [product, setProduct] = useState(null);
const { proId } = useParams();

  useEffect(() => {
    getproductInfo();
  }, []);

  async function getproductInfo() {
    const data = await fetch(productList + proId);
    const json = await data.json();
    setProduct(json.data);
  }

  return product;
};

export default useProduct;
