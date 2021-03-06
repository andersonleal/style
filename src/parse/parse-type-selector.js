import { isArr, isObj, parse } from "../api/index.js"

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
