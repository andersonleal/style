import { getBlockString, getSelectorsString, isDef } from "../api/index.js"

export function getStyle (params = {}, mq = false) {
  const media = mq && params.media
  const property = params.property

  return (/^%/u).test (property) || !isDef (property)
    ? null
    : "".concat (
      media ? "@media ".concat (media, "{") : "",
      getSelectorsString (params),
      "{",
      getBlockString (params),
      "}",
      media ? "}" : ""
    )
}
