import ava from "ava"
import { toPairs } from "./to-pairs.js"

ava ("given undefined arguments", (t) => {
  const actual = toPairs ()
  const expect = []

  t.deepEqual (actual, expect)
})

ava ("given an object with property string and null value", (t) => {
  const actual = toPairs ({ "color": null })
  const expect = [["color", null]]

  t.deepEqual (actual, expect)
})

ava ("given an object with property string and boolean value", (t) => {
  const actual = toPairs ({ "color": true })
  const expect = [["color", true]]

  t.deepEqual (actual, expect)
})

ava ("given an object with property string and number value", (t) => {
  const actual = toPairs ({ "margin": 0 })
  const expect = [["margin", 0]]

  t.deepEqual (actual, expect)
})

ava ("given an object with property string and string value", (t) => {
  const actual = toPairs ({ "color": "red" })
  const expect = [["color", "red"]]

  t.deepEqual (actual, expect)
})

ava ("given an object with property string and array value", (t) => {
  const actual = toPairs ({ "color": [0, 1] })
  const expect = [["color", [0, 1]]]

  t.deepEqual (actual, expect)
})

ava ("given an object with property string and object value", (t) => {
  const actual = toPairs ({ "color": { "a": 1 } })
  const expect = [["color", { "a": 1 }]]

  t.deepEqual (actual, expect)
})
