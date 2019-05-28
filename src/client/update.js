import { canUseDom, insertRule } from "../api/index.js"

/* istanbul ignore next */

export function update (params = {}) {
  return canUseDom ? insertRule (params) : params
}
