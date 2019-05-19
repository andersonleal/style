import { getAncestors } from "../build/get-ancestors.js"
import { getPlaceholders } from "../build/get-placeholders.js"
import { getSelectors } from "../build/get-selectors.js"
import { isObj } from "../utils/merge.js"
import { parse } from "./parse.js"

export function parseSelectors (params = {}) {
  const property = params.property
  const value = params.value

  if ((/([#$%&*+,.>[^~]|:[a-z])/u).test (property) && isObj (value)) {
    const emit = (/^[%:[]/u).test (property)

    const selectors = getSelectors (property)
      .reduce (function (a, b) {
        return a.concat (getAncestors (params.selectors, [b]))
      }, [])
      .reduce (function (a, b) {
        return a.concat ([getPlaceholders (b)])
      }, [])

    return parse ({ emit, "input": value, "media": params.media, selectors })
  }

  return params
}
