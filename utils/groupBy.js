'use strict'

/**
 * groupBy() groups an array by the given key. A transformation may be passed to be applied when each value is concatenated
 * to the grouped component.
 * @param {string} key - The key to use to group the array
 * @param {array} array - The array to group
 * @param {function} transform - A transformation to apply to the grouped value
 */
module.exports = function groupBy (key, array, transform) { 
  return array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    let val = obj
    if (typeof transform === 'function') {
        val = transform(val)
    }
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(val);
    return objectsByKeyValue;
  }, {})
};