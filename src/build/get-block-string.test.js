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

ava ("given a block with simple property and value (compact false)", (t) => {
  const actual = getBlockString (
    {
      "block": [
        {
          "background-color": "#f00"
        }
      ]
    },
    false
  )

  const expect = "background-color: #f00"

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

ava (
  "given a block with fallback properties and value (compact false)",
  (t) => {
    const actual = getBlockString (
      {
        "block": [
          {
            "background-color": "#f00"
          },
          {
            "background-color": "rgba(255, 0, 0, 0.9)"
          }
        ]
      },
      false
    )

    const expect =
      "background-color: #f00; background-color: rgba(255, 0, 0, 0.9)"

    t.is (actual, expect)
  }
)
