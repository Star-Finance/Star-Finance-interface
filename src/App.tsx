import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import './App.css';
import './redux/index'

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
      <Route path="/*" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
