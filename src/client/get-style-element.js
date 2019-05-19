/* istanbul ignore next */

export function getStyleElement (media = "") {
  const styles = document.querySelectorAll (
    "style[data-creator='@amory/style']"
  )

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

  return style
}
