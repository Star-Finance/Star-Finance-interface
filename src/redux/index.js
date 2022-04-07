import { createStore, bindActionCreators } from '../myRedux';
import reducer from './reducer';
import * as userAction from './actions/usersAction';
import { v1 as uuid } from'uuid';

const store = createStore(reducer);

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
