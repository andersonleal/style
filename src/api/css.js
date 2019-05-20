import { cache, getClassName, parse, update } from "./index.js"

export function css (params = {}) {
  return parse ({ "input": params })
    .map (cache)
    .map (update)
    .map (getClassName)
    .filter (Boolean)
    .join (" ")
}
