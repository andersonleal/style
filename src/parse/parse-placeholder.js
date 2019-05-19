import { merge } from "../utils/merge.js"
import { parseIdentifier } from "./parse-identifier.js"

export function parsePlaceholder (params = {}) {
  const property = params.property
  const value = params.value

  if ((/^%/u).test (property) && value === true) {
    return merge (params, {
      "identifier": parseIdentifier ({
        "media": params.media,
        property,
        "value": property
      }).identifier
    })
  }

  return params
}
