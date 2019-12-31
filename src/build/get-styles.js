import { getStyle, store } from "../api/index.js"

export function getStyles () {
  let results = []

  store.forEach (function (rules, media) {
    let styles = []

    rules.forEach (function (style) {
      styles.push (getStyle (style))
    })

    styles = styles.sort ()

    if (media) {
      styles.unshift ("@media ".concat (media, "{"))
      styles.push ("}")
    }

    results = results.concat (styles.join (""))
  })

  return results
    .filter (Boolean)
    .sort ()
    .join ("")
}
