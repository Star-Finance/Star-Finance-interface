import { all } from 'redux-saga/effects';
import walletTask from './walletTask';

export default function* () {
    yield all([walletTask()])
    console.log("saga 完成");
}
