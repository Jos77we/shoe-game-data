import React, {useState, useEffect} from 'react'
import axios from 'axios';

const GetRecentProduct = () => {

    const [productData, setProductData] = useState(null);

  const fetchMostRecentProduct = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product/recent');
      setProductData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMostRecentProduct()
  }, [])
  return (
    <div>
    {productData ? (
      <>
        <h2>Title: {productData.title}</h2>
        <p>Description: {productData.description}</p>
        <p>Price: {productData.price}</p>
        <p>Brand: {productData.brand}</p>
        <img src={`data:image/png;base64,${productData.image}`} alt="Most Recent Poster"  height="200px" width="150px"/>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}

export default GetRecentProduct