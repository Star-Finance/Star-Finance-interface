import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import reducer from './reducer';
import * as userAction from './actions/usersAction';
import { v1 as uuid } from 'uuid';
import thunk from 'redux-thunk';

/**
 * 一个中间件函数
 * @param {*} store 
 */
function logger1(store) {
    return function (next) {
        //下面返回的函数，是最终要应用的dispatch
        return function (action) {
            console.log("中间件1")
            console.log("旧数据", store.getState());
            console.log("action", action);
            next(action);
            console.log("新数据", store.getState());
            console.log("")
        }
    }
}

function logger2(store) {
    return function (next) {
        //下面返回的函数，是最终要应用的dispatch
        return function (action) {
            console.log("中间件2")
            console.log("旧数据", store.getState());
            console.log("action", action);
            next(action);
            console.log("新数据", store.getState());
            console.log("")
        }
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

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
