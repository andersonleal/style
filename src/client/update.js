import { canUseDom, insertRule, updateStyles } from "../api/index.js"

/* istanbul ignore next */

export function update (params = {}) {
  if (canUseDom && params.insertRule) {
    updateStyles ()
    insertRule (params)
  }

  return params
}
