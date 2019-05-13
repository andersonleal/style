import ava from "ava"
import { parseInput } from "./parse-input.js"

ava ("given undefined arguments", (t) => {
  const actual = parseInput ()
  const expect = []

  t.deepEqual (actual, expect)
})

ava ("given an object with multiple properties and values", (t) => {
  const actual = parseInput ({
    "input": {
      "backgroundColor": "#f00",
      "display": "block"
    }
  })

  const expect = [
    {
      "block": [
        {
          "background-color": "#f00"
        }
      ],
      "emit": true,
      "input": {
        "backgroundColor": "#f00"
      },
      "media": "",
      "property": "backgroundColor",
      "selectors": [],
      "value": "#f00"
    },
    {
      "block": [
        {
          "display": "block"
        }
      ],
      "emit": true,
      "input": {
        "display": "block"
      },
      "media": "",
      "property": "display",
      "selectors": [],
      "value": "block"
    }
  ]

  t.deepEqual (actual, expect)
})
