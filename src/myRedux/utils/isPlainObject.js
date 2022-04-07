export function isPlainObject (obj) {
    if(typeof obj !== 'object') {
        return false
    }
    return Object.getPrototypeOf(obj) === Object.prototype
}