/* eslint-disable no-plusplus, no-undefined */

import ava from "ava"
import { debounce } from "./debounce.js"

ava ("should debounce a function", (t) => {
  let callCount = 0

  function simpleFn (value) {
    ++callCount
    return value
  }

  simpleFn ()

  const debounced = debounce (simpleFn, 32)

  let results = [debounced ("a"), debounced ("b"), debounced ("c")]

  t.deepEqual (results, [undefined, undefined, undefined])
  t.is (callCount, 1)

  setTimeout (function () {
    t.is (callCount, 2)

    results = [debounced ("d"), debounced ("e"), debounced ("f")]

    t.deepEqual (results, ["c", "c", "c"])
    t.is (callCount, 2)
  }, 128)

  setTimeout (function () {
    t.is (callCount, 3)
  }, 256)
})
