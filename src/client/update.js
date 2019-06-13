import { canUseDom, insertRule } from "../api/index.js"

/* istanbul ignore next */

export function update (params = {}) {
  if (canUseDom && params.insertRule) {
    insertRule (params)
  }

  return params
}
