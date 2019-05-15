export function getBlockString (params = {}, compact = true) {
  const block = params.block || []

  return block
    .map (function (rule) {
      return Object.entries (rule).map (function (style) {
        const property = style[0]
        const value = style[1]

        return "".concat (property, compact ? ":" : ": ", value)
      })
    })
    .join (compact ? ";" : "; ")
}
