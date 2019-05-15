import ava from "ava"
import { parse } from "./parse.js"

ava ("given undefined arguments", (t) => {
  const actual = parse ()

  const expect = []

  t.deepEqual (actual, expect)
})

ava ("given an object with valid property and value", (t) => {
  const actual = parse ({
    "input": {
      "background-color": "#f00",
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
      "identifier": "jt2a9",
      "input": {
        "background-color": "#f00"
      },
      "media": "",
      "property": "backgroundColor",
      "selectors": [[".jt2a9"]],
      "value": "#f00"
    },
    {
      "block": [
        {
          "display": "block"
        }
      ],
      "emit": true,
      "identifier": "drtx9",
      "input": {
        "display": "block"
      },
      "media": "",
      "property": "display",
      "selectors": [[".drtx9"]],
      "value": "block"
    }
  ]

  t.deepEqual (actual, expect)
})
