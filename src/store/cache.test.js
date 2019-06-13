import ava from "ava"
import { cache } from "./cache.js"
import { store } from "./store.js"

ava.serial ("given undefined arguments", (t) => {
  const actual = cache ()

  const expect1 = {
    "insertRule": true
  }
  const expect2 = store.has ("")
  const expect3 = store.get ("")

  t.deepEqual (actual, expect1)
  t.true (expect2)
  t.true (expect3 instanceof Map)
})

ava.serial ("given an object with valid property and value (1)", (t) => {
  const actual = cache ({
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
  })

  const expect = {
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
    "insertRule": true,
    "media": "",
    "property": "backgroundColor",
    "selectors": [[".jt2a9"]],
    "value": "#f00"
  }

  t.deepEqual (actual, expect)
})

ava.serial ("given an object with valid property and value (2)", (t) => {
  const actual = cache ({
    "block": [
      {
        "background-color": "#f00"
      }
    ],
    "emit": true,
    "identifier": "jtdzh",
    "input": {
      "background-color": "#f00"
    },
    "media": "",
    "property": "backgroundColor",
    "selectors": [[".jtdzh", ":hover"]],
    "value": "#f00"
  })

  const expect = {
    "block": [
      {
        "background-color": "#f00"
      }
    ],
    "emit": true,
    "identifier": "jtdzh",
    "input": {
      "background-color": "#f00"
    },
    "insertRule": true,
    "media": "",
    "property": "backgroundColor",
    "selectors": [[".jt2a9"], [".jtdzh", ":hover"]],
    "value": "#f00"
  }

  t.deepEqual (actual, expect)
})

ava.serial ("given an object with valid property and value (3)", (t) => {
  const actual = cache ({
    "block": [
      {
        "background-color": "#f00"
      }
    ],
    "emit": true,
    "identifier": "jtdzh",
    "input": {
      "background-color": "#f00"
    },
    "media": "",
    "property": "backgroundColor",
    "selectors": [[".jtdzh", ":hover"]],
    "value": "#f00"
  })

  const expect = {
    "block": [
      {
        "background-color": "#f00"
      }
    ],
    "emit": true,
    "identifier": "jtdzh",
    "input": {
      "background-color": "#f00"
    },
    "insertRule": false,
    "media": "",
    "property": "backgroundColor",
    "selectors": [[".jt2a9"], [".jtdzh", ":hover"]],
    "value": "#f00"
  }

  t.deepEqual (actual, expect)
})
