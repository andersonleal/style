import { store } from "./store.js"
import { merge } from "../utils/merge.js"

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
          "selectors": addSelector
            ? style.selectors.concat (params.selectors)
            : style.selectors
        }
      )
    )
  } else {
    store.get (media).set (key, params)
  }

  return store.get (media).get (key)
}
