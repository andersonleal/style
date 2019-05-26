import { insertRule } from "../api/index.js"

export function update (params = {}) {
  return insertRule (params)
}
