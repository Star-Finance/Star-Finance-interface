import { createStore, bindActionCreators, applyMiddleware, } from 'redux';
import reducer from './reducer';
import { setWalletAccountAction, setWalletLoadingAction, getWalletAccountAction } from './action/wallet';
import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import rootSaga from './saga';

const sagaMid = createSagaMiddleware(); // 创建一个saga的中间件

const store = createStore(reducer, applyMiddleware(sagaMid, logger));

const boundActions = bindActionCreators({setWalletAccountAction, setWalletLoadingAction}, store.dispatch);

// boundActions.setWalletAccountAction("123456789");

console.log(store.getState());

sagaMid.run(rootSaga);

// store.dispatch(setWalletLoadingAction(true));

// store.dispatch(getWalletAccountAction())

// console.log(store.getState());

export default store;
