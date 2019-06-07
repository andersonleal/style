import { cache, getClassName, isArr, merge, parse, update } from "./index.js"

export function css (params) {
  const input = isArr (params) ? merge (... params) : params

  return parse ({ input })
    .map (cache)
    .map (update)
    .map (getClassName)
    .filter (Boolean)
    .join (" ")
}
