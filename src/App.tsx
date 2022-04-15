import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefiHome from './pages/DeFi';
import NFTHome from './pages/NFT';
import DaoHome from './pages/DAO';
import Launchpad from './pages/Launchpad';
import Layout from './components/layout';
import Staking from './pages/DeFi/Staking';
import store from  "./store"
import { Provider } from 'react-redux';
import { getWalletAccountAction } from './store/action/wallet'

function App() {

  useEffect(() => {
    store.dispatch(getWalletAccountAction())
  }, [])
  
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='defi' element={<DefiHome />}>
            <Route path="staking" element={<Staking />}></Route>
          </Route>
          <Route path='nft' element={<NFTHome />} />
          <Route path='launchpad' element={<Launchpad />} />
          <Route path='dao' element={<DaoHome />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
