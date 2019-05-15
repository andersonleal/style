import { getPropertyId } from "../build/get-property-id.js"
import { getStringHash } from "../build/get-string-hash.js"
import { merge } from "../utils/merge.js"

export function parseIdentifier (params = {}) {
  if (params.property) {
    const media = params.media || ""
    const property = params.property
    const value = params.value

    let selectors = params.selectors || []

    const identifier =
      typeof params.identifier === "undefined"
        ? getPropertyId (property).toString (36) +
          getStringHash (
            ""
              .concat (media)
              .concat (
                selectors
                  .map (function (selector) {
                    return selector.join ("")
                  })
                  .join (",")
              )
              .concat (JSON.stringify (value))
          ).slice (-3)
        : params.identifier

    selectors =
      selectors.length || (/^%/u).test (property)
        ? selectors.map (function (selector) {
          return (/^:/u).test (selector[0])
            ? [].concat (".".concat (identifier), selector)
            : selector
        })
        : selectors.concat ([[".".concat (identifier)]])

    return merge (params, { "selectors": null }, { identifier, selectors })
  }

  return params
}
