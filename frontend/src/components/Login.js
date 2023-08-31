import React, { useState } from "react";
import "./Content.css";
import pic1 from "../images/Component 1 (1).png";
import pic2 from "../images/sdrawing-removebg-preview 1.png";
import pic3 from "../images/Vector.png";
import pic4 from "../images/gg_adidas.png";
import pic5 from "../images/simple-icons_puma.png";
import { Button, Input } from "antd";
import axios from "axios";
// import axios from 'axios'
import { useNavigate } from "react-router-dom";
//import Design from "../design/Design";



const Login = () => {

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const url = "http://localhost:5000/api/user/login";
  const nav = useNavigate();

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try {
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      
      console.log(res.data.name)
      if (res.status === 200) {
        nav("/Dashboard");
      }

      //console.log(res)
    } catch (error) {
      alert("Error login in. Please try again.");
    }
  };

  
  return (
    
    <>
      <div className="content">
        <div className="content-logo">
          <div>
            <img src={pic1} alt="logo" height="150px" width="220px" />
          </div>
          <div>
            <img src={pic2} alt="feature" height="250px" width="350px" />
          </div>
          <div style={{ padding: "40px 30px" }}>
            <img src={pic3} alt="vector" />
            <img src={pic4} alt="vector" />
            <img src={pic5} alt="vector" />
          </div>
        </div>

        <div className="content-login">
          <div className="login">
            <p
              style={{
                padding: "8px 20px",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Login
            </p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div style={{ padding: "10px 20px" }}>
                <p style={{ color: "white" }}>Email</p>
                <Input
                  type="text"
                  className="login-tab"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div style={{ padding: "0px 20px" }}>
                <p style={{ color: "white" }}>Password</p>

                <Input
                  className="login-tab"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div style={{ marginLeft: "220px", marginTop: "40px" }}>
                {/* <a href="/Upload"> */}
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    borderRadius: "8px",
                    height: "30px",
                    width: "80px",
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Login
                </Button>
                {/* </a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
     
    </>
  );
};
export {Login};
