import React from 'react'
import { Routes, Route } from 'react-router-dom';
import L1 from './launchpad';
import './index.less';

export default function index() {
  return (
    <div className='defiContainer'>
        defi首页
        菜单部分
        <div className='defi__main'>
            <div className='defi__content'>
                <Routes>
                    <Route path="l1/*" element={<L1 />}></Route>
                </Routes>
            </div>
        </div>
    </div>
  )
}
