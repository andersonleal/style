import ava from "ava"
import { parseSelectors } from "./parse-selectors.js"

ava ("given undefined arguments", (t) => {
  const actual = parseSelectors ()

  const expect = {}

  t.deepEqual (actual, expect)
})

/* eslint-disable max-lines-per-function */
ava ("given an object with valid selectors", (t) => {
  const actual = parseSelectors ({
    "property": "#root %stuff",
    "value": {
      "#products::after,%figure > &,#body~&+stuff": {
        "background-color": "#f0f",
        "display": "grid"
      }
    }
  })

  const expect = [
    {
      "block": [
        {
          "background-color": "#f0f"
        }
      ],
      "emit": false,
      "identifier": "jtj6u",
      "input": {
        "background-color": "#f0f"
      },
      "media": "",
      "property": "backgroundColor",
      "selectors": [
        ["#root", " ", ".afdkz", " ", "#products", "::after"],
        [".af3qz", ">", "#root", " ", ".afdkz"],
        ["#body", "~", "#root", " ", ".afdkz", "+", "stuff"]
      ],
      "value": "#f0f"
    },
    {
      "block": [
        {
          "display": "grid"
        }
      ],
      "emit": false,
      "identifier": "draen",
      "input": {
        "display": "grid"
      },
      "media": "",
      "property": "display",
      "selectors": [
        ["#root", " ", ".afdkz", " ", "#products", "::after"],
        [".af3qz", ">", "#root", " ", ".afdkz"],
        ["#body", "~", "#root", " ", ".afdkz", "+", "stuff"]
      ],
      "value": "grid"
    }
  ]

  t.deepEqual (actual, expect)
})
/* eslint-enable max-lines-per-function */

ava ("given an object with valid property and value", (t) => {
  const actual = parseSelectors ({
    "property": "@media (max-width: 767px)",
    "value": {
      "background-color": "#f0f"
    }
  })

  const expect = {
    "property": "@media (max-width: 767px)",
    "value": {
      "background-color": "#f0f"
    }
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with valid pseudo-class selector", (t) => {
  const actual = parseSelectors ({
    "property": ":hover",
    "value": {
      "font-family": "Helvetica"
    }
  })

  const expect = [
    {
      "block": [
        {
          "font-family": "Helvetica"
        }
      ],
      "emit": true,
      "identifier": "c53hh",
      "input": {
        "font-family": "Helvetica"
      },
      "media": "",
      "property": "fontFamily",
      "selectors": [[".c53hh", ":hover"]],
      "value": "Helvetica"
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with valid attribute selector", (t) => {
  const actual = parseSelectors ({
    "property": "[aria-expanded=true]",
    "value": {
      "backgroundColor": "#f00"
    }
  })

  const expect = [
    {
      "block": [{ "background-color": "#f00" }],
      "emit": false,
      "identifier": "jtrn7",
      "input": { "backgroundColor": "#f00" },
      "media": "",
      "property": "backgroundColor",
      "selectors": [["[aria-expanded=true]"]],
      "value": "#f00"
    }
  ]

  t.deepEqual (actual, expect)
})
