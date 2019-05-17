import ava from "ava"
import { parseFontFace } from "./parse-font-face.js"

ava ("given undefined arguments", (t) => {
  const actual = parseFontFace ()

  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given an object with valid font-face declaration (1)", (t) => {
  const actual = parseFontFace ({
    "property": "fontFamily",
    "value": {
      "src":
        "url('/fonts/font.woff2') format ('woff2'), url('/fonts/font.woff') format ('woff')"
    }
  })

  const expect = [
    {
      "block": [
        {
          "src":
            "url('/fonts/font.woff2') format ('woff2'), url('/fonts/font.woff') format ('woff')"
        },
        {
          "font-family": "c5xq1"
        }
      ],
      "emit": false,
      "identifier": "c5xq1",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": {
        "src":
          "url('/fonts/font.woff2') format ('woff2'), url('/fonts/font.woff') format ('woff')"
      }
    },
    {
      "block": [
        {
          "font-family": "c5xq1"
        }
      ],
      "emit": true,
      "identifier": "c5xq1",
      "media": "",
      "property": "fontFamily",
      "selectors": [[".c5xq1"]],
      "value": {
        "src":
          "url('/fonts/font.woff2') format ('woff2'), url('/fonts/font.woff') format ('woff')"
      }
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with valid font-face declaration (2)", (t) => {
  const actual = parseFontFace ({
    "property": "fontFamily",
    "value": {
      "src":
        "url('/fonts/font2.woff2') format ('woff2'), url('/fonts/font2.woff') format ('woff')"
    }
  })

  const expect = [
    {
      "block": [
        {
          "src":
            "url('/fonts/font2.woff2') format ('woff2'), url('/fonts/font2.woff') format ('woff')"
        },
        {
          "font-family": "c5pnd"
        }
      ],
      "emit": false,
      "identifier": "c5pnd",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": {
        "src":
          "url('/fonts/font2.woff2') format ('woff2'), url('/fonts/font2.woff') format ('woff')"
      }
    },
    {
      "block": [
        {
          "font-family": "c5pnd"
        }
      ],
      "emit": true,
      "identifier": "c5pnd",
      "media": "",
      "property": "fontFamily",
      "selectors": [[".c5pnd"]],
      "value": {
        "src":
          "url('/fonts/font2.woff2') format ('woff2'), url('/fonts/font2.woff') format ('woff')"
      }
    }
  ]

  t.deepEqual (actual, expect)
})

/* eslint-disable max-lines-per-function */
ava ("given an object with valid font-face declaration (3)", (t) => {
  const actual = parseFontFace ({
    "property": "fontFamily",
    "value": {
      "fontFamily": "Avenir",
      "src":
        "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
    }
  })

  const expect = [
    {
      "block": [
        {
          "font-family": "Avenir"
        },
        {
          "src":
            "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
        }
      ],
      "emit": false,
      "identifier": "Avenir",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": {
        "fontFamily": "Avenir",
        "src":
          "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
      }
    },
    {
      "block": [
        {
          "font-family": "Avenir"
        }
      ],
      "emit": true,
      "identifier": "c5a4t",
      "media": "",
      "property": "fontFamily",
      "selectors": [[".c5a4t"]],
      "value": {
        "fontFamily": "Avenir",
        "src":
          "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
      }
    }
  ]

  t.deepEqual (actual, expect)
})
/* eslint-enable max-lines-per-function */
