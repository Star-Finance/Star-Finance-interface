import React from 'react'
import { Routes, Route } from 'react-router-dom';
import L1 from './launchpad';
import './index.less';
import Menu from '../../components/menu'

export default function index(props: any) {
  console.log(props);
  return (
    <div className='defiContainer'>
        <Menu />
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