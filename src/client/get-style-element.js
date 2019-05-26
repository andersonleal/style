/* istanbul ignore next */

export const getStyleElement = (function () {
  let styles

  return function (media = "") {
    if (typeof styles === "undefined") {
      styles = document.querySelectorAll ("style[data-creator='@amory/style']")
    }

    let style

    for (style of styles) {
      if (style.media === media) {
        return style
      }
    }

    style = document.createElement ("style")
    style.setAttribute ("data-creator", "@amory/style")

    if (media.length) {
      style.media = media
    }

    document.head.appendChild (style)

    styles = document.querySelectorAll ("style[data-creator='@amory/style']")

    return style
  }
}) ()
