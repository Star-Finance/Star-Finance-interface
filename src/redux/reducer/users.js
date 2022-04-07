import { ADDUSER, DELETEUSER } from '../actions/usersAction';
import {v1 as uuid} from 'uuid';

const initState = [
    { id: uuid(), name: "用户1", age: 11},
    { id: uuid(), name: '用户2', age: 12}
];

export default (state = initState, { type, payload }) => {
    console.log(type);
    switch (type){
        case ADDUSER: 
            return [
                ...state,
                payload
            ]
        case DELETEUSER:
            return state.filter(it => it.id !== payload);
        default:
            return state;
    }
        
}