import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FETCH_URL , productList} from '../constants';

const useProduct = () => {
  const { proId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getproductInfo() {
      try {
        const response = await fetch(`${FETCH_URL}/${proId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product info:', error);
      }
    }

    if (proId) {
      getproductInfo();
    }
  }, [proId]);

  return product;
};

export default useProduct;
