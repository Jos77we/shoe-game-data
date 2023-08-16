import React, { useState } from "react";
import { Input } from "antd";
import axios from "axios";
import "./Upload.css";
import { CloseCircleOutlined } from "@ant-design/icons";
import Dragger from "../design/Dragger";
import GetRecentPoster from "../fileApi/GetRecentPoster";
import GetRecentProduct from "../fileApi/GetRecentProduct";
import GetRecentNewProduct from "../fileApi/GetRecentNewProduct";


const UploadOutline = () => {
  const url = "http://localhost:5000/api/poster";
  const url1 = "http://localhost:5000/api/product";
  const url2 = "http://localhost:5000/product/new-product"
  const url3 = "http://localhost:5000/brand/new-logo"

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(" ");
  const [category, setCategory] = useState(" ");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);

    const myFile = e.target;
    const file = myFile.files[0];
    const fileName = file.name;

    const fileNameParagraph = document.getElementById("fileNameParagraph");
    fileNameParagraph.textContent = fileName;
  };

  const handleCancelPic = () => {
    setImage(null);

    const fileNameParagraph = document.getElementById("fileNameParagraph");
    fileNameParagraph.innerHTML = " ";
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("category", category);
    try {
      await axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      alert("Error uploading image. Please try again.");
    }
    // window.location.reload()
  };

  const [picture, setPicture] = useState(null);
  const [identifier, setIdentifier] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [brand, setBrand] = useState(" ");

  const handlePicChange = (e) => {
    setPicture(e.target.files[0]);

    const image = e.target;
    const file = image.files[0];
    const fileName = file.name;

    const fileNameParagraph = document.getElementById("fileName");
    fileNameParagraph.textContent = fileName;
  };

  const handleCancelPicture = () => {
    setPicture(null);

    const fileNameParagraph = document.getElementById("fileName");
    fileNameParagraph.innerHTML = " ";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", picture);
    formData.append("title", identifier);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("brand", brand);
    try {
      await axios
        .post(url1, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      alert("Error uploading image. Please try again.");
    }
    
  };

  const [name, setName] = useState(" ")
  const [brandItem, setBrandItem] = useState(" ")
  const [rating, setRating] = useState(" ")
  const [avPrice, setavPrice] = useState(" ")
  const [size, setSize] = useState(" ")
  const [colors, setColors] = useState(" ")
  const [desc, setDesc] = useState(" ")
  const [brImage, setBrImage] = useState(null)

  const handleBrandImageChange = (e) => {
    setBrImage(e.target.files[0]);

    const myImage = e.target;
    const file = myImage.files[0];
    const fileName = file.name;

    const fileNameParagraph = document.getElementById("fileNameIdentity");
    fileNameParagraph.textContent = fileName;
  };

  const handleBrandImageCancelPicture = () => {
    setBrImage(null);

    const fileNameParagraph = document.getElementById("fileNameIdentity");
    fileNameParagraph.innerHTML = " ";
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", brImage);
    formData.append("name", name);
    formData.append("brand", brandItem);
    formData.append("rating", rating);
    formData.append("price", avPrice);
    formData.append("size", size);
    formData.append("colors", colors);
    formData.append("desc", desc);
    try {
      await axios
        .post(url2, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      alert("Error uploading image. Please try again.");
    }
   
  };
//brand
const [logoname, setLogoname] = useState(" ")
const [logoType, setLogoType] = useState(" ")
const [logo, setLogo] = useState(null)

const handlelogoImageChange = (e) => {
  setLogo(e.target.files[0]);

  const myLogoFile= e.target;
  const file = myLogoFile.files[0];
  const fileName = file.name;

  const fileNameParagraph = document.getElementById("fileLogoParagraph");
  fileNameParagraph.textContent = fileName;
};

const handleLogoImageCancelPicture = () => {
  setLogo(null);

  const fileNameParagraph = document.getElementById("fileLogoParagraph");
  fileNameParagraph.innerHTML = " ";
};
const handleLogoSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("image", logo);
  formData.append("brand", logoname);
  formData.append("type", logoType )
  
  try {
    await axios
      .post(url3, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    alert("Error uploading image. Please try again.");
  }
 
};
  return (
    <>
      <div>
        <p style={{ fontWeight: "normal", fontSize: "1.2rem" }}>Poster</p>
      </div>
      <form onSubmit={(e) => handleUpload(e)}>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="upload">
            <p className="text">Click or drag file to this area to upload</p>
            <input
              type="file"
              id="myFile"
              name="filename"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div
          style={{
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="uploaded-image">
            <div style={{ width: "70%" }}>
              <p
                id="fileNameParagraph"
                style={{ marginLeft: "20px", fontWeight: "bold" }}
              ></p>
            </div>
            <CloseCircleOutlined
              style={{ fontSize: "20px" }}
              onClick={handleCancelPic}
            />
          </div>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <p style={{ padding: "10px" }}>Title</p>
          <Input
            style={{ width: "60%" }}
            type="text"
            placeholder="Description"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <p style={{ padding: "10px" }}>Category</p>
          <Input
            style={{ width: "60%" }}
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <Dragger content={<GetRecentPoster/>}/>
        </div>
      </form>
     
      {/* Feature and products */}

      <p
        style={{ marginTop: "20px", fontWeight: "normal", fontSize: "1.2rem" }}
      >
        Featured and Products
      </p>
      <p style={{ padding: "10px" }}>Image</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="upload">
            <p className="text">Click or drag file to this area to upload</p>
            <input type="file" id="image" onChange={handlePicChange} />
          </div>
        </div>
        <div
          style={{
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="uploaded-image">
            <div style={{ width: "70%" }}>
              <p
                id="fileName"
                style={{ marginLeft: "20px", fontWeight: "bold" }}
              ></p>
            </div>
            <CloseCircleOutlined
              style={{ fontSize: "20px" }}
              onClick={handleCancelPicture}
            />
          </div>
        </div>

        <div style={{ marginLeft: "30px" }}>
          <div>
            <p style={{ padding: "10px" }}>Identifier</p>
            <Input
              placeholder="Identifier"
              style={{ width: "60%" }}
              type="text"
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </div>
          <div>
            <p style={{ padding: "10px" }}>Description</p>
            <Input
              placeholder="Description"
              style={{ width: "60%" }}
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <p style={{ padding: "10px" }}>Price</p>
            <Input
              type="text"
              style={{ width: "60%" }}
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <p style={{ padding: "10px" }}>Brand</p>
            <Input
              style={{ width: "60%" }}
              type="text"
              placeholder="Brand"
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>
       <div>
        <Dragger content={<GetRecentProduct/>}/>
       </div>
      </form>
     {/* new product input */}
      <div>
        <p style={{ fontWeight: "normal", fontSize: "1.2rem" }}>New Product</p>
      </div>
      <form onSubmit={(e) => handleProductSubmit(e)}>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="upload">
            <p className="text">Click or drag file to this area to upload</p>
            <input
              type="file"
              id="myImage"
              name="filename"
              onChange={handleBrandImageChange}
            />
          </div>
        </div>
        <div
          style={{
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="uploaded-image">
            <div style={{ width: "70%" }}>
              <p
                id="fileNameIdentity"
                style={{ marginLeft: "20px", fontWeight: "bold" }}
              ></p>
            </div>
            <CloseCircleOutlined
              style={{ fontSize: "20px" }}
              onClick={handleBrandImageCancelPicture}
            />
          </div>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <p style={{ padding: "10px" }}>Name</p>
          <Input
            style={{ width: "60%" }}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <p style={{ padding: "10px" }}>Brand</p>
          <Input
            style={{ width: "60%" }}
            type="text"
            placeholder="Brand"
            onChange={(e) => setBrandItem(e.target.value)}
          />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <p style={{ padding: "10px" }}>Price</p>
          <Input
            style={{ width: "60%" }}
            type="text"
            placeholder="Price"
            onChange={(e) => setavPrice(e.target.value)}
          />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <p style={{ padding: "10px" }}>Rating</p>
          <Input
            style={{ width: "60%" }}
            type="text"
            placeholder="Rating"
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <p style={{ padding: "10px" }}>Size</p>
          <Input
            style={{ width: "60%" }}
            type="text"
            placeholder="Size"
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <p style={{ padding: "10px" }}>Colors</p>
          <Input
            style={{ width: "60%" }}
            type="text"
            placeholder="Colors"
            onChange={(e) => setColors(e.target.value)}
          />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <p style={{ padding: "10px" }}>Description</p>
          <Input
            style={{ width: "60%" }}
            type="text"
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <Dragger content={<GetRecentNewProduct/>}/>
        </div>
      </form>
     
     {/* brand */}
     <div>
        <p style={{ fontWeight: "normal", fontSize: "1.2rem" }}>Brand Upload</p>
      </div>
      <form onSubmit={(e) => handleLogoSubmit(e)}>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="upload">
            <p className="text">Click or drag file to this area to upload</p>
            <input
              type="file"
              id="myLogoFile"
              name="filename"
              onChange={handlelogoImageChange}
            />
          </div>
        </div>
        <div
          style={{
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="uploaded-image">
            <div style={{ width: "70%" }}>
              <p
                id="fileLogoParagraph"
                style={{ marginLeft: "20px", fontWeight: "bold" }}
              ></p>
            </div>
            <CloseCircleOutlined
              style={{ fontSize: "20px" }}
              onClick={handleLogoImageCancelPicture}
            />
          </div>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <p style={{ padding: "10px" }}>Name</p>
          <Input
            style={{ width: "60%" }}
            type="text"
            placeholder="Description"
            onChange={(e) => setLogoname(e.target.value)}
          />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <p style={{ padding: "10px" }}>Type</p>
          <Input
            style={{ width: "60%" }}
            type="text"
            placeholder="Category"
            onChange={(e) => setLogoType(e.target.value)}
          />
        </div>
        <div>
          <Dragger content={<GetRecentPoster/>}/>
        </div>
      </form>
    </>
  );
};

export default UploadOutline;
