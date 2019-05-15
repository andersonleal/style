import { parse } from "../parse/parse.js"

export function css (params = {}) {
  return parse ({ "input": params })
}
