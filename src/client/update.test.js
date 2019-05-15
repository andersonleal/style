import ava from "ava"
import { store } from "../store/store.js"
import { update } from "./update.js"

ava ("1", (t) => {
  store.set (
    "",
    new Map ([
      [
        '[{"background-color":"#f00"}]',
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
          "selectors": [[".jt2a9"]]
        }
      ],
      [
        '[{"display":"flex"},{"display":"grid"}]',
        {
          "block": [{ "display": "flex" }, { "display": "grid" }],
          "emit": true,
          "identifier": "dr7nz",
          "input": {
            "display": ["flex", "grid"]
          },
          "media": "",
          "property": "display",
          "selectors": [[".dr7nz"]]
        }
      ]
    ])
  )

  const actual = update ()

  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("2", (t) => {
  store.set (
    "(min-width: 768px)",
    new Map ([
      [
        '[{"background-color":"#f00"}]',
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
          "selectors": [[".jt2a9"]]
        }
      ],
      [
        '[{"display":"flex"},{"display":"grid"}]',
        {
          "block": [{ "display": "flex" }, { "display": "grid" }],
          "emit": true,
          "identifier": "dr7nz",
          "input": {
            "display": ["flex", "grid"]
          },
          "media": "",
          "property": "display",
          "selectors": [[".dr7nz"]]
        }
      ]
    ])
  )

  const actual = update ()

  const expect = {}

  t.deepEqual (actual, expect)
})
