import React, { useState } from 'react'
import { FileOutlined, SettingOutlined, UserOutlined, DesktopOutlined, HomeOutlined, SnippetsOutlined, CloudUploadOutlined  } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

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
  getItem('DashBoard', '1', <SnippetsOutlined />),
  getItem('Upload', '2', <CloudUploadOutlined /> ),
  getItem('List', '3',  <FileOutlined />),
  getItem('Users', '4', <UserOutlined/>),
  getItem('Settings', '5',<SettingOutlined />),
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
            height: 20,
            margin: 16,
            background: 'transparent',
            color:"White"
          }}
        ><p>Main Menu</p></div>
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
            margin: '0 10px',
            overflow: 'initial',
          }}
        >
          <div style={{display:'flex'}}>
          <p style={{padding:'5px 10px', fontWeight:'bold', fontSize:'1.5rem', flex:'3.0'}}>Welcome Grace</p> 
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
              minHeight: 460,
              background: colorBgContainer,
              borderRadius:'6px'
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
