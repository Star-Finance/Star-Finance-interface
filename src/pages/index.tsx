import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import { Navigate, Route, Routes } from 'react-router-dom';
import DefiHome from './DeFi';
import EexHome from './DEX';
import NFTHome from './NFT';
import DaoHome from './DAO';
import Launchpad from './Launchpad';

export default function index() {
  return (
    <Layout
        header={<Header/ >}
    >
      <Routes>
        <Route path="/defi/*" element={<DefiHome />} />
        <Route path="/dex" element={<EexHome />} />
        <Route path="/nft" element={<NFTHome />} />
        <Route path="/dao" element={<DaoHome />} />
        <Route path="/launchpad" element={<Launchpad />} />
      </Routes>
    </Layout>
  )
}
