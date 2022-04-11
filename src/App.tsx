import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './redux/index'
import DefiHome from './pages/DeFi';
import EexHome from './pages/DEX';
import NFTHome from './pages/NFT';
import DaoHome from './pages/DAO';
import Launchpad from './pages/Launchpad';
import Layout from './components/layout';
import Staking from './pages/DeFi/Staking';

function* getGenerator(): any {
  console.log("函数运行--开始");
  let result = yield 1;
  console.log("函数运行--开始1", result);
  result = yield 2;
  console.log("函数运行--开始2", result);
  result = yield 3;
  console.log("函数运行--开始3", result);
}

function iteratorCreator() {
  return {
    index: 0,
    next() {
      let result = {
        value: this.index > 3 ? undefined : this.index,
        done: this.index > 3
      }
      this.index ++;
      return result;
    }
  }
}

// const gennerator = getGenerator();
window.gennerator = iteratorCreator();

function App() {
  return (
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
  );
}

export default App;
