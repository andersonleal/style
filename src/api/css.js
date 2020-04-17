import { cache, getClassName, isArr, merge, parse, update } from "./index.js"

export function css (params, className) {
  const input = isArr (params) ? merge (... params) : params

  return parse ({ input })
    .map (cache)
    .map (update)
    .map (getClassName)
    .concat (
      isArr (className)
        ? className.filter (Boolean).join (" ")
        : className
    )
    .filter (Boolean)
    .sort ()
    .join (" ")
}
