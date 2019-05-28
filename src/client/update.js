import { canUseDom, insertRule, updateStyles } from "../api/index.js"

/* istanbul ignore next */

export function update (params = {}) {
  canUseDom && updateStyles ()

  return canUseDom ? insertRule (params) : params
}
