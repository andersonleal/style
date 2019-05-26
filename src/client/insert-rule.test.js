import ava from "ava"
import { insertRule } from "./insert-rule.js"

ava ("given undefined arguments", (t) => {
  const actual = insertRule ()
  const expect = {}

  t.deepEqual (actual, expect)
})
