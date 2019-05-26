import ava from "ava"
import { getBlockString } from "./get-block-string.js"

ava ("given undefined arguments", (t) => {
  const actual = getBlockString ()

  const expect = ""

  t.is (actual, expect)
})

ava ("given a block with simple property and value", (t) => {
  const actual = getBlockString ({
    "block": [
      {
        "background-color": "#f00"
      }
    ]
  })

  const expect = "background-color:#f00"

  t.is (actual, expect)
})

ava ("given a block with fallback properties and value", (t) => {
  const actual = getBlockString ({
    "block": [
      {
        "background-color": "#f00"
      },
      {
        "background-color": "rgba(255, 0, 0, 0.9)"
      }
    ]
  })

  const expect = "background-color:#f00;background-color:rgba(255, 0, 0, 0.9)"

  t.is (actual, expect)
})

ava ("given a block with keyframes object", (t) => {
  const actual = getBlockString ({
    "block": [
      { "0%": { "backgroundColor": "#f00", "opacity": 0 } },
      { "100%": { "backgroundColor": "#0f0", "opacity": 1 } }
    ]
  })

  const expect =
    "0%{background-color:#f00;opacity:0}100%{background-color:#0f0;opacity:1}"

  t.is (actual, expect)
})
