/* eslint-disable no-use-before-define */

export const isArr = Array.isArray

export function isObj (value) {
  return typeof value === "object"
}

export function canMerge (value) {
  return (
    Boolean (value) &&
    isObj (value) &&
    !(/^\[object (?:Date|RegExp)\]$/u).test (
      Object.prototype.toString.call (value)
    )
  )
}

export function emptyObj (value) {
  return isArr (value) ? [] : {}
}

export function cloneObj (value) {
  return canMerge (value) ? merge (emptyObj (value), value) : value
}

export function mergeArr (target, source) {
  return (isArr (target) && isArr (source)
    ? target.concat (source)
    : source
  ).map (cloneObj)
}

export function mergeObj (target, source) {
  for (const key of Object.keys (source)) {
    target[key] = merge (
      Object.prototype.hasOwnProperty.call (target, key) ? target[key] : {},
      source[key]
    )
  }

  return target
}

/**
 * This method recursively merges own enumerable string keyed properties of
 * source objects into a new empty object. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * @param  {...Object} sources
 * - The source objects.
 *
 * @returns {Object}
 *   Returns `object`.
 */

export function merge (... sources) {
  return sources.reduce (function (target, source) {
    if (isArr (source)) {
      return mergeArr (target, source)
    } else if (canMerge (source)) {
      return mergeObj (target, source)
    }

    return cloneObj (source)
  }, {})
}
