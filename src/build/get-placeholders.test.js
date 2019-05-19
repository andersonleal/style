import ava from "ava"
import { getPlaceholders } from "./get-placeholders.js"

ava ("given undefined arguments", (t) => {
  const actual = getPlaceholders ()

  const expect = []

  t.deepEqual (actual, expect)
})

ava ("given an array of selectors with placeholders", (t) => {
  const actual = getPlaceholders (["a", "%b", ".c", "%products", "%items"])

  const expect = ["a", ".afqkz", ".c", ".afknd", ".afxpz"]

  t.deepEqual (actual, expect)
})
