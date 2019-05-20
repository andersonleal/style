import {
  isObj,
  kebabCase,
  merge,
  parseIdentifier,
  toPairs
} from "../api/index.js"

export function parseKeyframes (params = {}) {
  const property = params.property
  const value = params.value

  if (property === "animationName" && isObj (value)) {
    const media = params.media || ""

    const tmp = parseIdentifier (
      merge (params, { "selectors": null }, { "selectors": [["@keyframes", " "]] })
    )

    const animationName = tmp.identifier

    return [
      merge (
        tmp,
        { "block": null, "selectors": null },
        {
          "block": toPairs (value).reduce (function (styles, style) {
            return styles.concat ({ [kebabCase (style[0])]: style[1] })
          }, []),
          "emit": false,
          "media": "",
          "selectors": [tmp.selectors[0].concat (animationName)],
          "value": animationName
        }
      ),
      merge (
        tmp,
        { "block": null, "selectors": null },
        {
          "block": [{ "animation-name": animationName }],
          "emit": true,
          "media": media,
          "selectors": [[".".concat (animationName)]],
          "value": animationName
        }
      )
    ]
  }

  return params
}
