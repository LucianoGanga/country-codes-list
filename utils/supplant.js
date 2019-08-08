'use strict'

/**
 * supplant() does variable substitution on the string. It scans through the string looking for
 * expressions enclosed in { } braces. If an expression is found, use it as a key on the object,
 * and if the key has a string value or number value, it is substituted for the bracket expression
 * and it repeats.
 * @param {string} stringVal - The string that needs supplanting
 * @param {object} replacements - key/value object with the keys to be replaced by the corresponding values
 */
module.exports = function (stringVal, replacements) {
  return stringVal.replace(/{([^{}]*)}/g, function (a, b) {
    let r = replacements[b]
    return typeof r === 'string' || typeof r === 'number' ? r : a
  })
}
