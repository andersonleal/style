import ava from "ava"
import { css } from "./css.js"
import { getCss } from "./get-css.js"

ava ("given undefined arguments", (t) => {
  const actual = getCss ()
  const expect = ""

  t.is (actual, expect)
})

/* eslint-disable sort-keys */
ava ("given a sample declaration", (t) => {
  css ({
    "backgroundColor": "#0f0",
    "@media (min-width: 768px)": {
      "backgroundColor": "#f00"
    }
  })

  const actual = getCss ()

  const expect =
    ".jtz4h{background-color:#0f0}@media (min-width: 768px){.jtdpi{background-color:#f00}}"

  t.is (actual, expect)
})

ava ("given a sample declaration (compact false)", (t) => {
  css ({
    "backgroundColor": "#0f0",
    "@media (min-width: 768px)": {
      "backgroundColor": "#f00"
    }
  })

  const actual = getCss (false)

  const expect =
    ".jtz4h { background-color: #0f0 }@media (min-width: 768px) { .jtdpi { background-color: #f00 } }"

  t.is (actual, expect)
})
/* eslint-enable sort-keys */
