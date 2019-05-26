import ava from "ava"
import { getStyle } from "./get-style.js"

ava ("given undefined arguments", (t) => {
  const actual = getStyle ()
  const expect = null

  t.is (actual, expect)
})

ava ("given an object with valid params", (t) => {
  const actual = getStyle ({
    "block": [{ "background-color": "#f00" }],
    "property": "backgroundColor",
    "selectors": [[".jt2a9"]]
  })

  const expect = ".jt2a9{background-color:#f00}"

  t.is (actual, expect)
})

ava ("given an object with valid params and mq = true", (t) => {
  const actual = getStyle (
    {
      "block": [{ "background-color": "#f00" }],
      "property": "backgroundColor",
      "selectors": [[".jt2a9"]]
    },
    true
  )

  const expect = ".jt2a9{background-color:#f00}"

  t.is (actual, expect)
})

ava ("given an object with valid params and media", (t) => {
  const actual = getStyle ({
    "block": [{ "background-color": "#f00" }],
    "media": "(min-width: 768px)",
    "property": "backgroundColor",
    "selectors": [[".jt2a9"]]
  })

  const expect = ".jt2a9{background-color:#f00}"

  t.is (actual, expect)
})

ava ("given an object with valid params, media, mq = true", (t) => {
  const actual = getStyle (
    {
      "block": [{ "background-color": "#f00" }],
      "media": "(min-width: 768px)",
      "property": "backgroundColor",
      "selectors": [[".jt2a9"]]
    },
    true
  )

  const expect = "@media (min-width: 768px){.jt2a9{background-color:#f00}}"

  t.is (actual, expect)
})
