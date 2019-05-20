import { isObj, kebabCase, toPairs } from "../api/index.js"

export function getBlockString (params = {}, compact = true) {
  const block = params.block || []

  let semi = compact ? ";" : "; "

  return block
    .map (function (rule) {
      return toPairs (rule).map (function (style) {
        const property = style[0]
        const value = style[1]

        if (isObj (value)) {
          const a = toPairs (value)
            .map (function (b) {
              return kebabCase (b[0]).concat (compact ? ":" : ": ", b[1])
            })
            .join (compact ? ";" : "; ")

          semi = compact ? "" : " "

          return "".concat (
            property,
            compact ? "{" : " { ",
            a,
            compact ? "}" : " }"
          )
        }

        return "".concat (property, compact ? ":" : ": ", value)
      })
    })
    .join (semi)
}
