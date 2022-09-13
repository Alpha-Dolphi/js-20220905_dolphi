/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
'use strict';
export function createGetter(path) {
    return (obj) => !Object.keys(obj).length ? undefined : path.split('.').reduce((arr, i) => arr[i], obj);
}