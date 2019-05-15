import { getClassName } from "../build/get-class-name.js"
import { update } from "../client/update.js"
import { parse } from "../parse/parse.js"
import { cache } from "../store/cache.js"

export function css (params = {}) {
  return parse ({ "input": params })
    .map (cache)
    .map (update)
    .map (getClassName)
    .filter (Boolean)
    .join (" ")
}
