import ava from "ava"
import { css } from "./css.js"

ava ("given undefined arguments", (t) => {
  const actual = css ()
  const expect = []

  t.deepEqual (actual, expect)
})
