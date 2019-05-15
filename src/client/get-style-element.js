/* istanbul ignore next */

export function getStyleElement (media = "") {
  const styles = document.getElementsByTagName ("style")

  let style

  for (style of styles) {
    if (style.media === media) {
      return style
    }
  }

  style = document.createElement ("style")

  if (media.length) {
    style.media = media
  }

  document.head.appendChild (style)

  return style
}
