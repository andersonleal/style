import { isArr, isObj } from "../utils/merge.js"
import { parse } from "./parse.js"

export function parseTypeSelector (params = {}) {
  const property = params.property
  const value = params.value

  if ((/^([a-z]+)$/u).test (property) && isObj (value) && !isArr (value)) {
    return parse ({
      "emit": false,
      "input": value,
      "media": params.media,
      "selectors": [[property]]
    })
  }

  return params
}
