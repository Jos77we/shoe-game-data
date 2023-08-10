import React, { useEffect, useState } from 'react'
import axios from "axios";

const GetRecentPoster = () => {
    const [posterData, setPosterData] = useState(null);

  const fetchMostRecentPoster = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/poster/recent');
      setPosterData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMostRecentPoster()
  }, [])
  return (
    <div>
      {posterData ? (
        <>
          <h2>Title: {posterData.title}</h2>
          <p>Category: {posterData.category}</p>
          <img src={`data:image/png;base64,${posterData.image}`} alt="Most Recent Poster"  height="200px" width="150px"/>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default GetRecentPoster