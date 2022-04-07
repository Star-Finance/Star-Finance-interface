import { getRandomString } from './utils/ActionTypes';
import ActionTypes from './utils/ActionTypes';
import { isPlainObject } from './utils/isPlainObject';
import compose from './utils/compose';

/**
 * 得到一个自动分发的action创建函数
 * @param {*} actionCreator 
 * @param {*} dispatch 
 */
function getAutoDispatchActionCreator(actionCreator, dispatch) {
    return function(...args) {
        dispatch(actionCreator(...args));
    }
}

/**
 * 仓库创建函数
 * @param {*} reducer 处理程序
 * @param {*} defaultState 默认的状态 
* 返回dispatch、getState、subscribe等函数
 */
export function createStore(reducer, defaultState) {

    let currentState = defaultState,
    currentReducer = reducer;

    const listeners = [];

    function dispatch(action) {
        if(!isPlainObject(action)) {
            throw new TypeError("action must be a plain object!")
        }
        if(action.type === undefined) {
            throw new TypeError("action must has a property of type")
        }
        currentState = currentReducer(currentState, action);
        for(let listener of listeners) {
            listener()
        }
    } 

    // 返回最新的state
    function getState() {
        return currentState;
    }

    /**
     * 返回一个取消回调的函数
     * @param {*} listener 监听的回调
     * @returns 
     */
    function subscribe(listener) {
        listeners.push(listener);
        let isRemove = false;
        return function() {
            if(isRemove) {
                return
            }
            listeners.splice(listeners.findIndex(it => it === listener), 1);
            isRemove = true;
        }
    }

    dispatch({
        type: `@@redux/INIT${getRandomString(7)}`
    })

    return {
        dispatch,
        getState,
        subscribe
    }
}

/**
 * 自动分发dispatch
 * @param {*} actionCreators 
 * @param {*} dispatch 
 * @returns 
 */
export function bindActionCreators(actionCreators, dispatch) {
    if(typeof actionCreators === "function") {
        return getAutoDispatchActionCreator(actionCreators, dispatch);
    } else if(typeof actionCreators === "object") {
        let result = {};
        for(const key in actionCreators) {
            if(actionCreators.hasOwnProperty(key)) {
                if(typeof actionCreators[key]!=="function") {
                    throw new TypeError("actionCreators must be an function")
                }
                result[key] = getAutoDispatchActionCreator(actionCreators[key], dispatch)
            }
        }
        return result;
    } else {
        throw new TypeError("actionCreators must be an object or function")
    }
}

/**
 * 组装reducer
 * @param {*} reducer 
 */
export function combineReducers (reducers) {
    validateReducer(reducers); // 验证reduces
    return function (state = {}, action) {
        const newState = {};
        for(const key in reducers) {
            if(reducers.hasOwnProperty(key)) {
                const reducer = reducers[key];
                newState[key] = reducer(state[key], action);
            }
        }
        return newState;
    }
}

function validateReducer(reducers) {
    if(typeof reducers !== "object") {
        throw new TypeError("reducers must be an object");
    }
    if(!isPlainObject(reducers)) {
        throw new TypeError("reducers must be an plain object");
    }

    for(const key in reducers) {
        if(reducers.hasOwnProperty(key)) {
            const reducer = reducers[key];
            let state = reducer(undefined, {
                type: ActionTypes.INIT()
            })
            if(state === undefined) {
                throw new TypeError("reducers must be not return undefined")
            }
            state = reducer(undefined, {
                type: ActionTypes.UNKNOWN()
            })
            if(state === undefined) {
                throw new TypeError("reducers must be not return undefined")
            }
        }
    }
}

/**
 * 注册中间键函数
 * @param  {...any} middleware 
 * @returns 
 * compose 函数组合
 */
export function applyMiddleware(...middleware) {
    return function (createStore) { // 给我创建仓库的函数
        // 虾面的函数用来创建仓库
        return function (reducer, defaultState) {
            const store = createStore(reducer, defaultState);
            let dispatch = () => { throw new TypeError("目前还不能使用dispatch") }
            const simpleStore = {
                getState: store.getState,
                dispatch: store.dispatch
            }
            // 通过中间键覆盖之前的dispatch
            // 通过中间键数组，得到一个dispath创建的数组
            const dispatchProducers = middleware.map(mid => mid(simpleStore))
            const dispatchProducer = compose(...dispatchProducers);
            dispatch = dispatchProducer(store.dispatch);
            return {
                dispatch,
                ...store
            }

        }
    }
}
