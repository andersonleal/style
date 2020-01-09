import ava from "ava"
import { emptyObj, isDef, merge } from "./merge.js"

ava ("given undefined arguments", (t) => {
  const actual = merge ()
  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given an array with undefined arguments", (t) => {
  /* eslint-disable-next-line no-undefined */
  const actual = merge ({ "a": "b" }, undefined, { "c": "d" })
  const expect = { "a": "b", "c": "d" }

  t.deepEqual (actual, expect)
})

ava ("given an array as value", (t) => {
  const actual = emptyObj (["a"])
  const expect = []

  t.deepEqual (actual, expect)
})

ava ("given an object as value", (t) => {
  const actual = emptyObj ({ "a": null })
  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given a defined object", (t) => {
  const actual = isDef ("")
  const expect = true

  t.deepEqual (actual, expect)
})

ava ("given an undefined object", (t) => {
  const actual = isDef ()
  const expect = false

  t.deepEqual (actual, expect)
})

ava ("given two objects", (t) => {
  const actual = merge ({ "a": null }, { "b": null })
  const expect = { "a": null, "b": null }

  t.deepEqual (actual, expect)
})

ava ("given two arrays", (t) => {
  const actual = merge (["a"], ["b"])
  const expect = ["a", "b"]

  t.deepEqual (actual, expect)
})

ava ("merge existing simple keys in target at the roots", (t) => {
  const actual = merge (
    { "key1": "value1", "key3": "value3" },
    { "key1": "changed", "key2": "value2" }
  )

  const expect = {
    "key1": "changed",
    "key2": "value2",
    "key3": "value3"
  }

  t.deepEqual (actual, expect)
})

ava ("should work on array of objects", (t) => {
  const actual = merge (
    [{ "key1": ["one", "two"] }, { "key3": ["four"] }],
    [{ "key1": ["one", "three"], "key2": ["one"] }, { "key3": ["five"] }]
  )

  const expect = [
    { "key1": ["one", "two"] },
    { "key3": ["four"] },
    { "key1": ["one", "three"], "key2": ["one"] },
    { "key3": ["five"] }
  ]

  t.deepEqual (actual, expect)
})
