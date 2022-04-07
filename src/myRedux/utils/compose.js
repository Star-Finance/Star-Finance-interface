/**
 * 函数组合
 * @param  {...any} funs 
 * @returns 
 */
export default function compose(...funcs) {
    if(funcs.length === 0) {
        return args => args;
    } else if(funcs.length === 1){
        return funcs[0]
    }

    if(funcs.find(fun => typeof fun !== "function")) {
        throw new TypeError("argument must be a array of function")
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)))

    // return function (...args) {
    //     let lastReturn = null;
    //     for(let i = funcs.length - 1; i >=0; i-- ) {
    //         const func = funcs[i];
    //         if(i === funcs.length - 1) {
    //             lastReturn = func(...args);
    //         } else {
    //             lastReturn = func(lastReturn);
    //         }
    //     }
    //     return lastReturn;
    // }
}