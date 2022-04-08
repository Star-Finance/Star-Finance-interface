import React from 'react'
import './index.less';
import img from '../../assets/images/logo.png';
import Wallet from '../Wallet';
import Navigator from '../Navigation';

export default function index() {
  return (
    <div className='header__warpper'>
      <div className='haeder__logo'>
        <img src={img} alt="" className="src" />
        <span>logo: Star.Trade</span>
      </div>
      <div className='header__right'>
        <div style={{flex: 1}}>
          <Navigator />
        </div>
        <div style={{minWidth: 291}}>
          {/* <span className='chainList'>链列表</span> */}
          <Wallet></Wallet>
          {/* <span className='lang'>语言选择</span> */}
        </div>
      </div>
    </div>
  )
}
