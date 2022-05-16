import React from 'react'
import { Outlet } from 'react-router-dom';
import './index.less';
import Menu from '../../components/menu';

export default function index(props: any) {

  // console.log(count, result);

  return (
    <div className='defiContainer'>
        <Menu />
        <div className='defi__main'>
            <div className='defi__content'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}
