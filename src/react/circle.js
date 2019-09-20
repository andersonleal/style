import { createElement as h } from "react"

export function Circle ({ color = "#000", ... props }) {
  return h (
    "svg",
    {
      "version": 1,
      "viewBox": "0 0 120 120",
      "xmlns": "http://www.w3.org/2000/svg",
      ... props
    },
    h ("circle", {
      "cx": 60,
      "cy": 60,
      "fill": color,
      "r": 50,
      "strokeWidth": 4
    })
  )
}
