import ava from "ava"
import { getStringHash } from "./get-string-hash.js"

ava ("given undefined arguments", (t) => {
  const actual = getStringHash ().slice (-3)
  const expect = "glw"

  t.is (actual, expect)
})

ava ("given an empty string", (t) => {
  const actual = getStringHash ("").slice (-3)
  const expect = "glw"

  t.is (actual, expect)
})

ava ("given a simple string (1)", (t) => {
  const actual = getStringHash ("abc").slice (-3)
  const expect = "ed0"

  t.is (actual, expect)
})

ava ("given a simple string (2)", (t) => {
  const actual = getStringHash ("abcd").slice (-3)
  const expect = "47k"

  t.is (actual, expect)
})
