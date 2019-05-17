import ava from "ava"
import { parseFallbacks } from "./parse-fallbacks.js"

ava ("given undefined arguments", (t) => {
  const actual = parseFallbacks ()

  const expect = {}

  t.deepEqual (actual, expect)
})

ava (
  "given an object with backgroundImage property and array value (1)",
  (t) => {
    const actual = parseFallbacks ({
      "property": "backgroundImage",
      "value": [
        "url(https://mdn.mozillademos.org/files/11305/firefox.png)",
        "url(https://mdn.mozillademos.org/files/11307/bubbles.png)",
        "linear-gradient(to right, rgba(30, 75, 115, 1)",
        "rgba(255, 255, 255, 0))"
      ]
    })

    const expect = [
      {
        "block": [
          {
            "background-image":
              "url(https://mdn.mozillademos.org/files/11305/firefox.png),url(https://mdn.mozillademos.org/files/11307/bubbles.png),linear-gradient(to right, rgba(30, 75, 115, 1),rgba(255, 255, 255, 0))"
          }
        ],
        "property": "backgroundImage",
        "value": [
          "url(https://mdn.mozillademos.org/files/11305/firefox.png)",
          "url(https://mdn.mozillademos.org/files/11307/bubbles.png)",
          "linear-gradient(to right, rgba(30, 75, 115, 1)",
          "rgba(255, 255, 255, 0))"
        ]
      }
    ]

    t.deepEqual (actual, expect)
  }
)

ava (
  "given an object with backgroundImage property and array value (2)",
  (t) => {
    const actual = parseFallbacks (
      {
        "property": "backgroundImage",
        "value": [
          "url(https://mdn.mozillademos.org/files/11305/firefox.png)",
          "url(https://mdn.mozillademos.org/files/11307/bubbles.png)",
          "linear-gradient(to right, rgba(30, 75, 115, 1)",
          "rgba(255, 255, 255, 0))"
        ]
      },
      false
    )

    const expect = [
      {
        "block": [
          {
            "background-image":
              "url(https://mdn.mozillademos.org/files/11305/firefox.png), url(https://mdn.mozillademos.org/files/11307/bubbles.png), linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0))"
          }
        ],
        "property": "backgroundImage",
        "value": [
          "url(https://mdn.mozillademos.org/files/11305/firefox.png)",
          "url(https://mdn.mozillademos.org/files/11307/bubbles.png)",
          "linear-gradient(to right, rgba(30, 75, 115, 1)",
          "rgba(255, 255, 255, 0))"
        ]
      }
    ]

    t.deepEqual (actual, expect)
  }
)

/* eslint-disable max-lines-per-function */
ava ("given an object with fontFamily property and array value (1)", (t) => {
  const actual = parseFallbacks ({
    "property": "fontFamily",
    "value": [
      {
        "fontFamily": "Avenir",
        "src": "url('/fonts/avenir.woff') format('woff')"
      },
      "Helvetica",
      "Arial",
      {
        "src": "url('/fonts/font-2.woff') format('woff')"
      }
    ]
  })

  const expect = [
    {
      "block": [
        {
          "font-family": "Avenir"
        },
        {
          "src": "url('/fonts/avenir.woff') format('woff')"
        }
      ],
      "emit": false,
      "identifier": "Avenir",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": {
        "fontFamily": "Avenir",
        "src": "url('/fonts/avenir.woff') format('woff')"
      }
    },
    {
      "block": [
        {
          "src": "url('/fonts/font-2.woff') format('woff')"
        },
        {
          "font-family": "c53zz"
        }
      ],
      "emit": false,
      "identifier": "c53zz",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": {
        "src": "url('/fonts/font-2.woff') format('woff')"
      }
    },
    {
      "block": [
        {
          "font-family": "Avenir,Helvetica,Arial,c53zz"
        }
      ],
      "property": "fontFamily",
      "value": [
        {
          "fontFamily": "Avenir",
          "src": "url('/fonts/avenir.woff') format('woff')"
        },
        "Helvetica",
        "Arial",
        {
          "fontFamily": "c53zz",
          "src": "url('/fonts/font-2.woff') format('woff')"
        }
      ]
    }
  ]

  t.deepEqual (actual, expect)
})

ava ("given an object with fontFamily property and array value (2)", (t) => {
  const actual = parseFallbacks (
    {
      "property": "fontFamily",
      "value": [
        {
          "fontFamily": "Avenir",
          "src": "url('/fonts/avenir.woff') format('woff')"
        },
        "Helvetica",
        "Arial",
        {
          "src": "url('/fonts/font-2.woff') format('woff')"
        }
      ]
    },
    false
  )

  const expect = [
    {
      "block": [
        {
          "font-family": "Avenir"
        },
        {
          "src": "url('/fonts/avenir.woff') format('woff')"
        }
      ],
      "emit": false,
      "identifier": "Avenir",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": {
        "fontFamily": "Avenir",
        "src": "url('/fonts/avenir.woff') format('woff')"
      }
    },
    {
      "block": [
        {
          "src": "url('/fonts/font-2.woff') format('woff')"
        },
        {
          "font-family": "c53zz"
        }
      ],
      "emit": false,
      "identifier": "c53zz",
      "media": "",
      "property": "fontFamily",
      "selectors": [["@font-face"]],
      "value": {
        "src": "url('/fonts/font-2.woff') format('woff')"
      }
    },
    {
      "block": [
        {
          "font-family": "Avenir, Helvetica, Arial, c53zz"
        }
      ],
      "property": "fontFamily",
      "value": [
        {
          "fontFamily": "Avenir",
          "src": "url('/fonts/avenir.woff') format('woff')"
        },
        "Helvetica",
        "Arial",
        {
          "fontFamily": "c53zz",
          "src": "url('/fonts/font-2.woff') format('woff')"
        }
      ]
    }
  ]

  t.deepEqual (actual, expect)
})
/* eslint-enable max-lines-per-function */

ava ("given an object with display property and array value", (t) => {
  const actual = parseFallbacks ({
    "property": "display",
    "value": ["block", "flex", "grid"]
  })

  const expect = [
    {
      "block": [
        {
          "display": "block"
        },
        {
          "display": "flex"
        },
        {
          "display": "grid"
        }
      ],
      "property": "display",
      "value": ["block", "flex", "grid"]
    }
  ]

  t.deepEqual (actual, expect)
})
