import React, {useState, useEffect} from "react";
import './Temporary.css'
import axios from "axios";


const ImageDisplay = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/product/all-products');
      setDocuments(response.data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };
 
  return (
    <div>
    {documents.map((doc) => (
        <div key={doc._id} className="document-item">
          {doc.image && doc.image.data ? (
            <img
              src={`data:${doc.image.contentType};base64,${doc.image.data}`}
              alt={doc.name}
              height='300px'
              width="300px"
            />
          ) : (
            <p>No image available</p>
          )}
        <p>Name: {doc.name}</p>
        <p>Brand: {doc.brand}</p>
        <p>Price: {doc.price}</p>
        <p>Size: {doc.size}</p>
        <p>Colors: {doc.colors}</p>
        <p>Description: {doc.desc}</p>
        <p>Rating: {doc.rating}</p>
        <p>Created At: {new Date(doc.createdAt).toLocaleString()}</p>
        <p>Updated At: {new Date(doc.updatedAt).toLocaleString()}</p>
      </div>
    ))}
  </div>
  );
};

export default ImageDisplay;
