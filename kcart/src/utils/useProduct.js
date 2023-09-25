import { useState, useEffect } from "react";
import { productList } from "../constants";


const useProduct = (proId) => {

  const [product, setProduct] = useState(null);


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
