import React, {useState, useEffect} from 'react'
import axios from 'axios';

const GetRecentNewProduct = () => {
    const [posterData, setPosterData] = useState(null);

  const fetchMostRecentNewProduct = async () => {
    try {
      const response = await axios.get('http://localhost:5000/product/new-product/recent');
      setPosterData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMostRecentNewProduct()
  }, [])
  return (
    <div>
      {posterData ? (
        <>
          <h2>Name: {posterData.title}</h2>
          <p>Brand: {posterData.brand}</p>
          <p>Price: {posterData.price}</p>
          <p>Rating: {posterData.rating}</p>
          <p>Size: {posterData.size}</p>
          <p>Colors: {posterData.colors}</p>
          <p>Description: {posterData.desc}</p>
          <img src={`data:image/png;base64,${posterData.image}`} alt="Most Recent Poster"  height="200px" width="150px"/>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default GetRecentNewProduct