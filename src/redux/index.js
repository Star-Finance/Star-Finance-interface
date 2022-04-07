import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import reducer from './reducer';
import * as userAction from './actions/usersAction';
import { v1 as uuid } from 'uuid';

/**
 * 中间键
 * 本质是得到一个dispatch函数
 */
function logger1(store) {
    console.log("logger1")
}

function logger2(store) {
    console.log("logger1", store)
}

const store = createStore(reducer, applyMiddleware(logger1, logger2));

console.log(store.getState());

store.subscribe(() => {
    console.log("新增监听器")
})

const actionCreators = {
    addUser: userAction.createAddUserAction
}

const actions = bindActionCreators(actionCreators, store.dispatch);

// const fff = store.dispatch(userAction.createAddUserAction({
//     id: uuid(),
//     name: "用户3",
//     age: 13
// }))

actions.addUser({
    id: uuid(),
    name: "用户3",
    age: 13
})

console.log(store.getState());
