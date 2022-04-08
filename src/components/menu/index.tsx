import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Sider = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  const onOpenChange = (keys: any[]) => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256, position: "fixed", height: '100%' }}>
      <Menu.Item key="/defi/staking" icon={<AppstoreOutlined/>}>
        <Link to="/defi/staking">Staking</Link>
      </Menu.Item>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Frams">
        <Menu.Item key="5">
          <Link to="/defi/l1">LP 质押挖矿</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/defi/l2">单币质押挖矿</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="DAO">
        <Menu.Item key="9">Lock up</Menu.Item>
        <Menu.Item key="10">Repurchase</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Sider;