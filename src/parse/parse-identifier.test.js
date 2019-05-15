import ava from "ava"
import { parseIdentifier } from "./parse-identifier.js"

ava ("given undefined arguments", (t) => {
  const actual = parseIdentifier ()
  const expect = {}

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier (1)", (t) => {
  const actual = parseIdentifier ({
    "property": "backgroundColor",
    "value": "#f00"
  })

  const expect = {
    "identifier": "jt2a9",
    "property": "backgroundColor",
    "selectors": [[".jt2a9"]],
    "value": "#f00"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier (2)", (t) => {
  const actual = parseIdentifier ({
    "property": "backgroundColor",
    "value": "#0f0"
  })

  const expect = {
    "identifier": "jtz4h",
    "property": "backgroundColor",
    "selectors": [[".jtz4h"]],
    "value": "#0f0"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier (3)", (t) => {
  const actual = parseIdentifier ({
    "property": "color",
    "value": "#0f0"
  })

  const expect = {
    "identifier": "jkz4h",
    "property": "color",
    "selectors": [[".jkz4h"]],
    "value": "#0f0"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier and media (1)", (t) => {
  const actual = parseIdentifier ({
    "media": "(max-width: 767px)",
    "property": "color",
    "value": "#0f0"
  })

  const expect = {
    "identifier": "jkmmt",
    "media": "(max-width: 767px)",
    "property": "color",
    "selectors": [[".jkmmt"]],
    "value": "#0f0"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier and media (2)", (t) => {
  const actual = parseIdentifier ({
    "media": "(min-width: 768px)",
    "property": "color",
    "value": "#0f0"
  })

  const expect = {
    "identifier": "jkduu",
    "media": "(min-width: 768px)",
    "property": "color",
    "selectors": [[".jkduu"]],
    "value": "#0f0"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier and selectors (1)", (t) => {
  const actual = parseIdentifier ({
    "property": "color",
    "selectors": [[":active"]],
    "value": "#0f0"
  })

  const expect = {
    "identifier": "jkk07",
    "property": "color",
    "selectors": [[".jkk07", ":active"]],
    "value": "#0f0"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with undefined identifier and selectors (2)", (t) => {
  const actual = parseIdentifier ({
    "property": "color",
    "selectors": [[":hover"]],
    "value": "#0f0"
  })

  const expect = {
    "identifier": "jkgwd",
    "property": "color",
    "selectors": [[".jkgwd", ":hover"]],
    "value": "#0f0"
  }

  t.deepEqual (actual, expect)
})

ava (
  "given an object with undefined identifier, media, and selectors",
  (t) => {
    const actual = parseIdentifier ({
      "media": "(min-width: 768px)",
      "property": "color",
      "selectors": [[":hover"]],
      "value": "#0f0"
    })

    const expect = {
      "identifier": "jkda2",
      "media": "(min-width: 768px)",
      "property": "color",
      "selectors": [[".jkda2", ":hover"]],
      "value": "#0f0"
    }

    t.deepEqual (actual, expect)
  }
)

ava ("given an object with undefined identifier with selectors", (t) => {
  const actual = parseIdentifier ({
    "property": "background-color",
    "selectors": [[".abcde"]],
    "value": "#f00"
  })

  const expect = {
    "identifier": "jt5lu",
    "property": "background-color",
    "selectors": [[".abcde"]],
    "value": "#f00"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with defined identifier", (t) => {
  const actual = parseIdentifier ({
    "identifier": "abcde",
    "property": "background-color",
    "value": "#f00"
  })

  const expect = {
    "identifier": "abcde",
    "property": "background-color",
    "selectors": [[".abcde"]],
    "value": "#f00"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with valid camel-case property and value", (t) => {
  const actual = parseIdentifier ({
    "property": "backgroundColor",
    "value": "#000"
  })

  const expect = {
    "identifier": "jt37r",
    "property": "backgroundColor",
    "selectors": [[".jt37r"]],
    "value": "#000"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with valid kebab-case property and value", (t) => {
  const actual = parseIdentifier ({
    "property": "background-color",
    "value": "#000"
  })

  const expect = {
    "identifier": "jt37r",
    "property": "background-color",
    "selectors": [[".jt37r"]],
    "value": "#000"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with valid property, value, and selectors", (t) => {
  const actual = parseIdentifier ({
    "property": "background-color",
    "selectors": [[":hover"]],
    "value": "#000"
  })

  const expect = {
    "identifier": "jta6z",
    "property": "background-color",
    "selectors": [[".jta6z", ":hover"]],
    "value": "#000"
  }

  t.deepEqual (actual, expect)
})

ava ("given an object with valid property, value, and media", (t) => {
  const actual = parseIdentifier ({
    "media": "(min-width: 768px)",
    "property": "background-color",
    "value": "#000"
  })

  const expect = {
    "identifier": "jt0ac",
    "media": "(min-width: 768px)",
    "property": "background-color",
    "selectors": [[".jt0ac"]],
    "value": "#000"
  }

  t.deepEqual (actual, expect)
})

ava (
  "given an object with valid property, value, media, and selectors",
  (t) => {
    const actual = parseIdentifier ({
      "media": "(min-width: 768px)",
      "property": "background-color",
      "selectors": [[":hover"]],
      "value": "#000"
    })

    const expect = {
      "identifier": "jtdo0",
      "media": "(min-width: 768px)",
      "property": "background-color",
      "selectors": [[".jtdo0", ":hover"]],
      "value": "#000"
    }

    t.deepEqual (actual, expect)
  }
)
