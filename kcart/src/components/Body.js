import ProductForm from './ProductForm';
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import { sortProducts } from '../utils/helper';
import {sortItemsByPrice,addProduct } from "./../utils/productSlice";
import { useSelector, useDispatch } from 'react-redux';

import { FETCH_URL } from "../constants";

const Body = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const sortBy = useSelector((state) => state.product.sortByPrice);
  const dispatch = useDispatch();

  const [isFormVisible, setIsFormVisible] = useState(false);

const handleAddProduct = (formData) => {
    // Dispatch the action to add a new product to the Redux store
    dispatch(addProduct(formData));

    // You can also update the local state if needed
    setAllProducts([...allProducts, formData]);

    // Close the form modal
    setIsFormVisible(false);
  };
  // Dispatch the action with the default sorting order
  const handleSortChange = (event) => {
    const selectedSortOrder = event.target.value;
    
    // Dispatch the action to update the sorting order in Redux
    dispatch(sortItemsByPrice(selectedSortOrder));

    // The sorted products will now be obtained from Redux store
      // Sort the products based on the selected sorting option
      const sorted = sortProducts(selectedSortOrder, sortedProducts);
      setSortedProducts(sorted);
  };
  
  const sortProducts = (order, products) => {
    const sorted = [...products];
    if (order === 'lowToHigh') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (order === 'highToLow') {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  };
  
  useEffect(() => {
    // Fetch products from the API when the component mounts
    async function fetchData() {
      try {
        const response = await fetch(FETCH_URL);
        const data = await response.json();
        setAllProducts(data);
        setSortedProducts(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);




  if (!allProducts) return null;

  return allProducts?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
   <div className="flex flex-end gap-6 search-container p-5 bg-pink-50 my-5 ">
   <div>
      <label htmlFor="sortSelect">Sort by price:</label>
      <select id="sortSelect" onChange={handleSortChange} value={sortBy}>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
    <div className="flex justify-between ">
    <button className='border-solid rounded-lg' onClick={() => setIsFormVisible(!isFormVisible)}>Add Product</button>
    {isFormVisible && <ProductForm onSubmit={handleAddProduct} />}
      </div>
      </div>
     
      <div className="flex flex-wrap">
        {sortedProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
            sortedProducts.map((product) => {
            return (
              <Link to={"/product/" + product.id} key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                  
                />
              </Link>
            );
          })
        )}
      </div>
      {isFormVisible && (
        <ProductForm onSubmit={handleAddProduct} onCancel={() => setIsFormVisible(false)} />
      )}
    </>
  );
};

export default Body;
