function isPlainObject (obj) {
    if(typeof obj !== 'object') {
        return false
    }
    return Object.getPrototypeOf(obj) === Object.prototype
}

/**
 * 得到一个指定长度的随机字符串
 * @param {*} length 
 */
function getRandomString(length) {
    return Math.random().toString(36).substr(2, length).split("").join(".")
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
                result[key] = actionCreators[key]
            }
        }
        return result;
    } else {
        throw new TypeError("actionCreators must be an object or function")
    }
}

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