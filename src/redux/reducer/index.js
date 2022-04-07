import userReducer from './users';

export default (state = {}, action) => {
    const newState = {
        users: userReducer(state.users, action)
    }
    return newState;
}