import React from 'react';
import { Layout, Button, Menu } from 'antd';
import { UserOutlined, LogoutOutlined, CompassOutlined } from '@ant-design/icons';

const { Header } = Layout;
const HeaderComponent = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ fontSize: '24px', marginRight: '16px', color: 'white' }}>Map App</div>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1" icon={<CompassOutlined />}>
            Map
          </Menu.Item>
        </Menu>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button style={{ marginRight: '16px' }} icon={<UserOutlined />}>
          Profile
        </Button>
        <Button style={{ marginRight: '16px' }} icon={<LogoutOutlined />}>
          Login
        </Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
