
  export function sortProducts(sortOrder, product) {
    // Make a copy of the products array to avoid mutating the original array
    const sortedProducts = [...product];
  
    sortedProducts.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else if (sortOrder === 'desc') {
        return b.price - a.price;
      } else {
        // Default sorting behavior, you can handle it as needed
        return 0;
      }
    });
  
    return sortedProducts;
  }
  