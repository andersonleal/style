import { createElement as h } from "./react.js"
import { hydrate } from "./react-dom.js"

import { App } from "./app.js"

/* eslint-disable-next-line no-undef */
hydrate (h (App), document.getElementById ("root"))
