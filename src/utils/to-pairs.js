export function toPairs (params = {}) {
  return Object.keys (params).map (function (key) {
    return [key, params[key]]
  })
}
