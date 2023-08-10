import React, { useEffect, useState } from "react";
import {  List } from "antd";
import axios from "axios";

const UserList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    axios.get('http://localhost:5000/api/user/user-list')
    .then((res) => {
        setData(res.data)
    })
    .catch(() => {
        setLoading(false);
    })
   
  };
  useEffect(() => {
    loadMoreData()
  });

  return (
    <>
      <div>UserList</div>
      <List
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.name}>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.email}
            />
            {item.createdAt}
            {/* <div>Content</div> */}
          </List.Item>
        )}
      />
    </>
  );
};

export default UserList;
