import { isObj, kebabCase, toPairs } from "../api/index.js"

export function getBlockString (params = {}) {
  const block = params.block || []

  let sep = ";"

  return block
    .map (function (rule) {
      return toPairs (rule).map (function (style) {
        const property = style[0]
        const value = style[1]

        if (isObj (value)) {
          const a = toPairs (value)
            .map (function (b) {
              return kebabCase (b[0]).concat (":", b[1])
            })
            .join (";")

          sep = ""

          return "".concat (property, "{", a, "}")
        }

        return "".concat (property, ":", value)
      })
    })
    .join (sep)
}
