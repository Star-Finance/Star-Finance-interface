import React from 'react'
import './index.less';
import img from '../../assets/images/logo.png';
import Wallet from '../Wallet';

export default function index() {
  return (
    <div className='header__warpper'>
      <div className='haeder__logo'>
        <img src={img} alt="" className="src" />
        <span>logo: Star.Trade</span>
      </div>
      <div className='header__right'>
        <div className="header_nav">
          导航模块
        </div>
        <div>
          {/* <span className='chainList'>链列表</span> */}
          <Wallet></Wallet>
          {/* <span className='lang'>语言选择</span> */}
        </div>
      </div>
    </div>
  )
}
