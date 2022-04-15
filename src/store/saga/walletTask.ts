import { WalletTypes, setWalletAccountAction, setWalletLoadingAction } from '../action/wallet';
import { takeEvery, put, call, select } from 'redux-saga/effects';
import { connectWallet } from '../../utils/api/connectWallet';

function* g_connectWallet(): any {
    // 设置加载中
    yield put(setWalletLoadingAction(true));
    try {
        const account = yield call(connectWallet);
        yield put(setWalletAccountAction(account[0]))
    }
    catch (err) {
        console.log(err)
    }
    finally {
        yield put(setWalletLoadingAction(false));
    }
}

export default function* () {
    yield takeEvery(WalletTypes.getWalletAccount, g_connectWallet)
}