import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import L1 from '../Launchpad';
import './index.less';
import Menu from '../../components/menu'
import Staking from './Staking';

export default function index(props: any) {
  return (
    <div className='defiContainer'>
        <Menu />
        <div className='defi__main'>
            <div className='defi__content'>
                <Routes>
                    <Route path="/staking" element={<Staking />}></Route>
                    <Route path="/" element={() => <Navigate to="/staking" />} />{/*重定向组件*/}
                </Routes>
            </div>
        </div>
    </div>
  )
}
