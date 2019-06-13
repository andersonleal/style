import { merge, store } from "../api/index.js"

export function cache (params = {}) {
  const block = params.block || []
  const media = params.media || ""

  const key = JSON.stringify (block)

  if (!store.has (media)) {
    store.set (media, new Map ())
  }

  if (store.get (media).has (key)) {
    const style = store.get (media).get (key)

    const addSelector =
      style.selectors.findIndex (function (selector) {
        return selector.join ("") === params.selectors[0].join ("")
      }) < 0

    store.get (media).set (
      key,
      merge (
        params,
        {
          "selectors": null
        },
        {
          "insertRule": addSelector,
          "selectors": (addSelector
            ? style.selectors.concat (params.selectors)
            : style.selectors
          ).sort (function (a, b) {
            return a.length - b.length || a.join ("").localeCompare (b.join (""))
          })
        }
      )
    )
  } else {
    store.get (media).set (key, merge (params, { "insertRule": true }))
  }

  return store.get (media).get (key)
}
