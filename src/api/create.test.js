import ava from "ava"
import { create } from "./create.js"

ava ("given undefined arguments", (t) => {
  const actual = create ()
  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given an object with simple declarations", (t) => {
  const actual = create ({
    "banner": {
      "display": "block",
      "width": "80%"
    },
    "product": {
      "color": "#f00",
      "display": ["block", "flex", "grid"]
    }
  })

  const expect = {
    "banner": "drtx9 dtndl",
    "product": "jk2a9 dr4gk"
  }

  t.deepEqual (actual, expect)
})
