import { merge } from "@amory/style"
import { createElement as h } from "react"
import { renderToStaticMarkup } from "react-dom/server"

import { Circle } from "./circle.js"

export function icon ({
  icons = {},
  /* eslint-disable-next-line no-shadow */
  name = "Circle",
  selector = "::before",
  style = {},
  ... props
} = {}) {
  const Icon = icons[name] || Circle

  return merge (
    {
      [selector]: {
        "backgroundImage": [
          'url("data:image/svg+xml,',
          encodeURIComponent (
            renderToStaticMarkup (h (Icon, props))
          ).replace (/%[\dA-F]{2}/gu, function (match) {
            switch (match) {
              case "%20": return " "
              case "%3D": return "="
              case "%3A": return ":"
              case "%2F": return "/"
              default: return match.toLowerCase ()
            }
          }),
          '")'
        ].join (""),
        "backgroundRepeat": "no-repeat",
        "content": "' '",
        "display": "inline-block",
        "minHeight": 16,
        "minWidth": 16
      }
    },
    style
  )
}
