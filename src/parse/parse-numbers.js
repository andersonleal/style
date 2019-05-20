import { isNum, kebabCase, merge } from "../api/index.js"

export function parseNumbers (params = {}) {
  const property = params.property
  let value = params.value

  /* eslint-disable-next-line max-len */
  const regex = /(animationIterationCount|borderImage(?:Outset|Slice|Width)|box(?:(?:Flex)(?:Group)?|OrdinalGroup)|column(?:Count|s)|fillOpacity|floodOpacity|stopOpacity|stroke(?:Dash(?:array|offset)|Miterlimit|Opacity|Width)|flex(?:Grow|Positive|Shrink|Negative|Order)?\b|grid(?:Area|Column(?:End|Start)?|Row(?:End|Start)?)|fontWeight|line(?:Clamp|Height)|opacity|\border|orphans|tabSize|widows|zIndex|zoom)/u

  if (!regex.test (property) && isNum (value) && value !== 0) {
    value = "".concat (value, "px")

    return merge (
      params,
      { "block": null },
      { "block": [{ [kebabCase (property)]: value }], value }
    )
  }

  return params
}
