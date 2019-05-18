import ava from "ava"
import { parse } from "./parse.js"

ava ("given undefined arguments", (t) => {
  const actual = parse ()

  const expect = []

  t.deepEqual (actual, expect)
})

ava ("given an object with valid property and value", (t) => {
  const actual = parse ({
    "input": {
      "background-color": "#f00",
      "display": "block"
    }
  })

  const expect = [
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
      "selectors": [[".jt2a9"]],
      "value": "#f00"
    },
    {
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
  ]

  t.deepEqual (actual, expect)
})

/* eslint-disable max-lines-per-function */
ava ("given an object with a media declaration", (t) => {
  /* eslint-disable sort-keys */
  const actual = parse ({
    "input": {
      "@media (min-width: 768px)": {
        "color": "#f00",
        "fontFamily": "sans-serif",
        "@media screen": {
          "backgroundColor": ["rgba(0, 0, 0, 0.9)", "#111"]
        }
      }
    }
  })
  /* eslint-enable sort-keys */

  const expect = [
    {
      "block": [
        {
          "color": "#f00"
        }
      ],
      "emit": true,
      "identifier": "jkdpi",
      "input": {
        "color": "#f00"
      },
      "media": "(min-width: 768px)",
      "property": "color",
      "selectors": [[".jkdpi"]],
      "value": "#f00"
    },
    {
      "block": [
        {
          "font-family": "sans-serif"
        }
      ],
      "emit": true,
      "identifier": "c5r5i",
      "input": {
        "fontFamily": "sans-serif"
      },
      "media": "(min-width: 768px)",
      "property": "fontFamily",
      "selectors": [[".c5r5i"]],
      "value": "sans-serif"
    },
    {
      "block": [
        {
          "background-color": "rgba(0, 0, 0, 0.9)"
        },
        {
          "background-color": "#111"
        }
      ],
      "emit": true,
      "identifier": "jtne4",
      "input": {
        "backgroundColor": ["rgba(0, 0, 0, 0.9)", "#111"]
      },
      "media": "(min-width: 768px) and screen",
      "property": "backgroundColor",
      "selectors": [[".jtne4"]],
      "value": ["rgba(0, 0, 0, 0.9)", "#111"]
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with a complex fontFamily declaration", (t) => {
  const actual = parse ({
    "input": {
      "fontFamily": [
        {
          "fontFamily": "Avenir",
          "src":
            "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
        },
        {
          "src": "url('/fonts/font.woff2') format ('woff2')"
        },
        "sans-serif"
      ]
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
      "identifier": "c5a4t",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": "Avenir"
    },
    {
      "block": [
        {
          "src": "url('/fonts/font.woff2') format ('woff2')"
        },
        {
          "font-family": "c5z34"
        }
      ],
      "emit": false,
      "identifier": "c5z34",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": "c5z34"
    },
    {
      "block": [
        {
          "font-family": "Avenir,c5z34,sans-serif"
        }
      ],
      "emit": true,
      "identifier": "c5mvq",
      "input": {
        "fontFamily": [
          {
            "fontFamily": "Avenir",
            "src":
              "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
          },
          {
            "src": "url('/fonts/font.woff2') format ('woff2')"
          },
          "sans-serif"
        ]
      },
      "media": "",
      "property": "fontFamily",
      "selectors": [[".c5mvq"]],
      "value": [
        {
          "fontFamily": "Avenir",
          "src":
            "url('/fonts/avenir.woff2') format ('woff2'), url('/fonts/avenir.woff') format ('woff')"
        },
        {
          "fontFamily": "c5z34",
          "src": "url('/fonts/font.woff2') format ('woff2')"
        },
        "sans-serif"
      ]
    }
  ]

  t.deepEqual (actual, expect)
})
/* eslint-disable max-lines-per-function */
