import ava from "ava"
import { parseKeyframes } from "./parse-keyframes.js"

ava ("given undefined arguments", (t) => {
  const actual = parseKeyframes ()

  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given an object with valid keyframes declaration (1)", (t) => {
  const actual = parseKeyframes ({
    "property": "animationName",
    "value": {
      "0%": {
        "opacity": 0
      },
      "100%": {
        "opacity": 1
      }
    }
  })

  const expect = [
    {
      "block": [{ "0%": { "opacity": 0 } }, { "100%": { "opacity": 1 } }],
      "emit": false,
      "identifier": "m7okn",
      "media": "",
      "property": "animationName",
      "selectors": [["@keyframes", " ", "m7okn"]],
      "value": "m7okn"
    },
    {
      "block": [{ "animation-name": "m7okn" }],
      "emit": true,
      "identifier": "m7okn",
      "media": "",
      "property": "animationName",
      "selectors": [[".m7okn"]],
      "value": "m7okn"
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with valid keyframes declaration (2)", (t) => {
  const actual = parseKeyframes ({
    "property": "animationName",
    "value": {
      "0%": {
        "opacity": 1
      },
      "100%": {
        "opacity": 0
      }
    }
  })

  const expect = [
    {
      "block": [{ "0%": { "opacity": 1 } }, { "100%": { "opacity": 0 } }],
      "emit": false,
      "identifier": "m7nlz",
      "media": "",
      "property": "animationName",
      "selectors": [["@keyframes", " ", "m7nlz"]],
      "value": "m7nlz"
    },
    {
      "block": [
        {
          "animation-name": "m7nlz"
        }
      ],
      "emit": true,
      "identifier": "m7nlz",
      "media": "",
      "property": "animationName",
      "selectors": [[".m7nlz"]],
      "value": "m7nlz"
    }
  ]

  t.deepEqual (actual, expect)
})
