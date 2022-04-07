import userReducer from './users';
import { combineReducers } from '../../myRedux';

// export default (state = {}, action) => {
//     const newState = {
//         users: userReducer(state.users, action)
//     }
//     return newState;
// }

export default combineReducers({
    users: userReducer
})