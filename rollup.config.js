import { execSync } from "child_process"
import { terser } from "rollup-plugin-terser"
import pkg from "./package.json"

const banner = `/*! @copyright Peter T Bosse II | @license Apache-2.0 | @link github.com/ptb/style | @version ${new Date ()
  .toISOString ()
  .split ("T")
  .shift ()
  .replace (/-/gu, ".")}-${execSync ("git rev-parse HEAD")
  .toString ()
  .slice (0, 7)} */`

export default [
  {
    "input": "src/api/index.js",
    "output": {
      "banner": banner,
      "file": pkg.module,
      "format": "esm"
    },
    "plugins": [
      terser ({
        "mangle": {
          "toplevel": true
        },
        "output": {
          "comments": /^!/u
        },
        "sourcemap": false
      })
    ]
  },
  {
    "input": "src/api/index.js",
    "output": {
      "banner": banner,
      "file": pkg.main,
      "format": "umd",
      "name": "amory"
    },
    "plugins": [
      terser ({
        "mangle": {
          "toplevel": true
        },
        "output": {
          "comments": /^!/u
        },
        "sourcemap": false
      })
    ]
  },
  {
    "input": "src/api/style.js",
    "output": {
      "banner": banner,
      "file": pkg.browser,
      "format": "esm"
    },
    "plugins": [
      terser ({
        "mangle": {
          "toplevel": true
        },
        "output": {
          "comments": /^!/u
        },
        "sourcemap": false
      })
    ]
  }
]
