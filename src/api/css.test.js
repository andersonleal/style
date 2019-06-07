import ava from "ava"
import { store } from "../store/store.js"
import { css } from "./css.js"

function strMapToObj (strMap) {
  const obj = Object.create (null)

  for (const [k, v] of strMap) {
    obj[k] = v
  }

  return obj
}

ava ("given undefined arguments", (t) => {
  const actual = css ()
  const expect = ""

  t.deepEqual (actual, expect)
})

ava ("given an object with simple declarations", (t) => {
  const actual1 = css ({
    "backgroundColor": "#f00",
    "display": "block"
  })

  const expect1 = "jt2a9 drtx9"

  const actual2 = strMapToObj (store.get (""))

  const expect2 = {
    '[{"background-color":"#f00"}]': {
      "block": [
        {
          "background-color": "#f00"
        }
      ],
      "emit": true,
      "identifier": "jt2a9",
      "input": {
        "backgroundColor": "#f00"
      },
      "media": "",
      "property": "backgroundColor",
      "selectors": [[".jt2a9"]],
      "value": "#f00"
    },
    '[{"display":"block"}]': {
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
  }

  t.is (actual1, expect1)
  t.deepEqual (actual2, expect2)
})

ava ("given an array of objects with simple declarations", (t) => {
  const actual = css ([
    {
      "backgroundColor": "#f00",
      "display": "block"
    },
    {
      "backgroundColor": "#0f0"
    }
  ])

  const expect = "jtz4h drtx9"

  t.is (actual, expect)
})
