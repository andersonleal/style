import ava from "ava"
import { parseNumbers } from "./parse-numbers.js"

ava ("given undefined arguments", (t) => {
  const actual = parseNumbers ()

  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given an object with 'margin' property and integer value (1)", (t) => {
  const actual = parseNumbers ({
    "property": "margin",
    "value": 10
  })

  const expect = {
    "block": [{ "margin": "10px" }],
    "property": "margin",
    "value": "10px"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with 'margin' property and integer value (2)", (t) => {
  const actual = parseNumbers ({
    "property": "margin",
    "value": 0
  })

  const expect = {
    "property": "margin",
    "value": 0
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with 'order' property and integer values", (t) => {
  const actual = parseNumbers ({
    "property": "order",
    "value": 10
  })

  const expect = {
    "property": "order",
    "value": 10
  }

  t.deepEqual (actual, expect)
})
