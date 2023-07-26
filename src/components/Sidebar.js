import React from 'react';
import { Layout, Menu } from 'antd';
import { CompassOutlined } from '@ant-design/icons';
import FormInput from './FormInput';

const { Sider } = Layout;
const SidebarComponent = () => {
  return (
    <Sider collapsible>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<CompassOutlined />}>
          Map
        </Menu.Item>
      </Menu>
      <FormInput />
    </Sider>
  );
};

export default SidebarComponent;
