import React, { useEffect, useState } from "react";
import { List } from "antd";
import axios from "axios";

const ImageList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    axios
      .get("http://localhost:5000/api/images")
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const productData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    axios
      .get("http://localhost:5000/api/product-images")
      .then((res) => {
        setList(res.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
    productData();
  });

  return (
    <>
      <div>ImageList</div>
      <List
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.title}>
            <List.Item.Meta
              // avatar={<Avatar src={item.image} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.category}
            />
            {/* <div>Content</div> */}
          </List.Item>
        )}
      />
      <div>Product Images</div>
      <List
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.description}
            />
            <div>$ {item.price}</div>
            {item.brand}
            
          </List.Item>
        )}
      />
    </>
  );
};

export default ImageList;
