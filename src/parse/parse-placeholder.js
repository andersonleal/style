import { merge, parseIdentifier } from "../api/index.js"

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
