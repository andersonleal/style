import {
  isArr,
  isObj,
  kebabCase,
  merge,
  parseIdentifier,
  toPairs
} from "../api/index.js"

export function parseFontFace (params = {}) {
  const property = params.property
  const value = params.value

  if (property === "fontFamily" && isObj (value) && !isArr (value)) {
    const media = params.media || ""

    const tmp = parseIdentifier (
      merge (params, { "selectors": null }, { "selectors": [["@font-face"]] })
    )

    const fontFamily =
      value.fontFamily || value["font-family"] || tmp.identifier

    value.fontFamily = fontFamily
    delete value["font-family"]

    return [
      merge (
        tmp,
        {
          "block": null
        },
        {
          "block": toPairs (value).reduce (function (styles, style) {
            return styles.concat ({ [kebabCase (style[0])]: style[1] })
          }, []),
          "emit": false,
          "media": "",
          "value": fontFamily
        }
      ),
      merge (
        tmp,
        { "block": null, "selectors": null },
        {
          "block": [{ "font-family": fontFamily }],
          "emit": true,
          "media": media,
          "selectors": [[".".concat (tmp.identifier)]],
          "value": fontFamily
        }
      )
    ]
  }

  return params
}
