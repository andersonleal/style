import { execSync } from "child_process"
import { terser } from "rollup-plugin-terser"
import pkg from "./package.json"

const banner = "/*! @copyright "
  .concat (pkg.author.name)
  .concat (" | @license ")
  .concat (pkg.license)
  .concat (" | @link ")
  .concat (pkg.homepage)
  .concat (" | @version ")
  .concat (
    new Date ()
      .toISOString ()
      .split ("T")
      .shift ()
      .replace (/-/gu, ".")
  )
  .concat ("-")
  .concat (
    execSync ("git rev-parse HEAD")
      .toString ()
      .slice (0, 7)
  )
  .concat (" */")

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
