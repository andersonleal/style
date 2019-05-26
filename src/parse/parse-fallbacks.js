import { isObj, kebabCase, merge, parseFontFace } from "../api/index.js"

/* eslint-disable max-lines-per-function */
export function parseFallbacks (params = {}) {
  const value = params.value

  if (Array.isArray (value)) {
    const property = params.property

    let block = []
    const styles = []

    switch (property) {
      case "backgroundImage":
        block = [
          {
            [kebabCase (property)]: value.join (",")
          }
        ]
        break
      case "fontFamily":
        block = [
          {
            "font-family": value
              .reduce (function (fonts, font) {
                if (isObj (font)) {
                  const fontFace = parseFontFace ({
                    "property": property,
                    "value": font
                  }).shift ()

                  styles.push (fontFace)

                  return fonts.concat (fontFace.value)
                }

                return fonts.concat (font)
              }, [])
              .join (",")
          }
        ]
        break
      default:
        block = value.map (function (fallback) {
          return { [kebabCase (property)]: fallback }
        })
        break
    }

    return styles.concat (
      merge (
        params,
        {
          "block": null
        },
        {
          block
        }
      )
    )
  }

  return params
}
/* eslint-enable max-lines-per-function */
