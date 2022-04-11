import React from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './index.less';
import Menu from '../../components/menu'
import Staking from './Staking';

export default function index(props: any) {
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
