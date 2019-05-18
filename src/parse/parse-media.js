import { kebabCase } from "../utils/kebab-case.js"
import { isObj } from "../utils/merge.js"
import { parse } from "./parse.js"

export function parseMedia (params = {}) {
  const property = params.property
  const value = params.value

  if ((/^@media/u).test (property) && isObj (value)) {
    const media = [params.media, kebabCase (property.slice (7))]
      .filter (Boolean)
      .join (" and ")

    return parse ({ "input": value, media })
  }

  return params
}
