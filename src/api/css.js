import { parseInput } from "../parse/parse-input.js"

export function css (params = {}) {
  return parseInput ({ "input": params })
}
