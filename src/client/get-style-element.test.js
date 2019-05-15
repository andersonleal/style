/* global browser, page */

import ava from "ava"
import http from "http"
import puppeteer from "puppeteer"
import { getStyleElement } from "./get-style-element.js"

function httpContent (content = "") {
  return `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" lang="en"><head><title> </title>${content}</head></html>`
}

ava.before (async () => {
  http
    .createServer ((request, response) => {
      response.setHeader ("Content-type", "application/xhtml+xml")

      switch (request.url) {
        case "/a":
          return response.end (httpContent ())
        case "/b":
          return response.end (httpContent (`<style>.b{all:inherit}</style>`))
        case "/c":
          return response.end (
            httpContent (
              `<style media="(min-width: 768px)">.c{gap:1px}</style>`
            )
          )
      }

      return response.end ()
    })
    .listen (7000)

  global.browser = await puppeteer.launch ()
})

ava.beforeEach (async () => {
  global.page = await browser.newPage ()
})

ava.afterEach.always (async () => {
  await page.close ()
})

ava.after.always (async () => {
  await browser.close ()
})

ava.serial ("given URL '/a', verify returned contents (1)", async (t) => {
  await page.goto ("http://localhost:7000/a", { "waitUntil": "networkidle0" })

  const actual = await page.content ()

  const expect = httpContent ()

  t.is (actual, expect)
})

ava.serial ("given URL '/a', create a new style element (2)", async (t) => {
  await page.goto ("http://localhost:7000/a", { "waitUntil": "networkidle0" })

  const style = await page
    .evaluateHandle (getStyleElement)
    .then ((el) => el._remoteObject.className)

  const actual = await page.content ()

  const expect = httpContent (`<style></style>`)

  t.is (style, "HTMLStyleElement")
  t.is (actual, expect)
})

ava.serial ("given URL '/a', create a new style element (3)", async (t) => {
  await page.goto ("http://localhost:7000/a", { "waitUntil": "networkidle0" })

  const style = await page
    .evaluateHandle (getStyleElement, "(min-width: 768px)")
    .then ((el) => el._remoteObject.className)

  const actual = await page.content ()

  const expect = httpContent (`<style media="(min-width: 768px)"></style>`)

  t.is (style, "HTMLStyleElement")
  t.is (actual, expect)
})

ava.serial ("given URL '/b', verify returned contents (1)", async (t) => {
  await page.goto ("http://localhost:7000/b", { "waitUntil": "networkidle0" })

  const actual = await page.content ()

  const expect = httpContent (`<style>.b{all:inherit}</style>`)

  t.is (actual, expect)
})

ava.serial (
  "given URL '/b', should re-use existing style element (2)",
  async (t) => {
    await page.goto ("http://localhost:7000/b", { "waitUntil": "networkidle0" })

    const style = await page
      .evaluateHandle (getStyleElement)
      .then ((el) => el._remoteObject.className)

    const actual = await page.content ()

    const expect = httpContent (`<style>.b{all:inherit}</style>`)

    t.is (style, "HTMLStyleElement")
    t.is (actual, expect)
  }
)

ava.serial (
  "given URL '/b', should create additional style element (3)",
  async (t) => {
    await page.goto ("http://localhost:7000/b", { "waitUntil": "networkidle0" })

    const style = await page
      .evaluateHandle (getStyleElement, "(min-width: 768px)")
      .then ((el) => el._remoteObject.className)

    const actual = await page.content ()

    const expect = httpContent (
      /* eslint-disable-next-line max-len */
      `<style>.b{all:inherit}</style><style media="(min-width: 768px)"></style>`
    )

    t.is (style, "HTMLStyleElement")
    t.is (actual, expect)
  }
)

ava.serial ("given URL '/c', verify returned contents (1)", async (t) => {
  await page.goto ("http://localhost:7000/c", { "waitUntil": "networkidle0" })

  const actual = await page.content ()

  const expect = httpContent (
    `<style media="(min-width: 768px)">.c{gap:1px}</style>`
  )

  t.is (actual, expect)
})

ava.serial (
  "given URL '/c', should create additional style element (2)",
  async (t) => {
    await page.goto ("http://localhost:7000/c", { "waitUntil": "networkidle0" })

    const style = await page
      .evaluateHandle (getStyleElement)
      .then ((el) => el._remoteObject.className)

    const actual = await page.content ()

    const expect = httpContent (
      `<style media="(min-width: 768px)">.c{gap:1px}</style><style></style>`
    )

    t.is (style, "HTMLStyleElement")
    t.is (actual, expect)
  }
)

ava.serial (
  "given URL '/c', should re-use existing style element (3)",
  async (t) => {
    await page.goto ("http://localhost:7000/c", { "waitUntil": "networkidle0" })

    const style = await page
      .evaluateHandle (getStyleElement, "(min-width: 768px)")
      .then ((el) => el._remoteObject.className)

    const actual = await page.content ()

    const expect = httpContent (
      `<style media="(min-width: 768px)">.c{gap:1px}</style>`
    )

    t.is (style, "HTMLStyleElement")
    t.is (actual, expect)
  }
)
