import React from 'react'
import { FileOutlined, SettingOutlined, UserOutlined, DesktopOutlined, HomeOutlined, SnippetsOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
//import UploadOutline from '../components/UploadOutline';
import { useNavigate} from 'react-router-dom';
//import Login from '../components/Login';


const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Upload', '1', <SnippetsOutlined />),
  getItem('List', '2',  <FileOutlined />),
  getItem('Users', '3', <UserOutlined/>),
  getItem('Settings', 'sub1',<SettingOutlined />, [
    getItem('Tom', '4'),
    getItem('Bill', '5'),
  ]),
  getItem('Display', '6', <DesktopOutlined />)
];


const Design = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const history = useNavigate();

  const handleMenuClick = (label) => {
    history(`/${label}`);
  };

   const content = props.content;

  return (
    <Layout hasSider
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" mode="inline"  defaultSelectedKeys={['1']}>
        {items.map((item) => (
        <Menu.Item  key={item.label} onClick={() => handleMenuClick(item.label)} >
        <span> {item.icon}</span> 
        <span> {item.label}</span>
        </Menu.Item>
      ))}
    </Menu>
      </Sider>
      <Layout className="site-layout"
      style={{
        marginLeft: 200,
      }}>
        <Content
          style={{
            margin: '0 16px',
            overflow: 'initial',
          }}
        >
          <div style={{display:'flex'}}>
          <p style={{padding:'10px', fontWeight:'bold', fontSize:'1.5rem', flex:'3.0'}}>Welcome Grace</p> 
          <div style={{padding:'30px 10px', flex:'0.2'}}>
            <a href='/'>
          <HomeOutlined style={{fontSize:'20px'}}/>
          </a>
          </div>
          </div>
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius:'8px'
            }}
           
          >
            {content}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          OneCell Technologies ©2023 Created by Me
        </Footer>
      </Layout>
    </Layout>

  )
}

export default Design
