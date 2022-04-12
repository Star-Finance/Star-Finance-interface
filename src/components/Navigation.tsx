import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomizeIcon from '../components/customizeIcon';

class Navigation extends React.Component {
  handleClick = (e: any) => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['0']}
        style={{border: "none"}}
        defaultOpenKeys={['sub1']}
        mode="horizontal"
      >
        <Menu.Item key="0" icon={<CustomizeIcon style={{color: "orange", fontSize: 18}} type="starcoin-icon-yishu" />}>
            <Link to="defi/staking">Defi</Link>
        </Menu.Item>
        <Menu.Item key="1" icon={<CustomizeIcon style={{color: "orange", fontSize: 18}} type="starcoin-icon-jinrong-" />}>
            <Link to="nft">NFT Market</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CustomizeIcon style={{color: "orange", fontSize: 18}} type="starcoin-icon-EXCHANGE" />}>
            <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer">Star.DEX</a>
        </Menu.Item>
        {/* <Menu.Item key="3" icon={<CustomizeIcon style={{color: "orange", fontSize: 18}} type="starcoin-icon-tekunshujuzhili" />}>
            <Link to="dao">DAO</Link>
        </Menu.Item> */}
        <Menu.Item key="4" icon={<CustomizeIcon style={{color: "orange", fontSize: 18}} type="starcoin-icon-jingdongzhongchou" />}>
            <Link to="launchpad">Launchpad</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation
