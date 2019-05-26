export function getSelectorsString (params = {}) {
  const selectors = params.selectors || []

  return selectors
    .map (function (selector) {
      return selector.join ("")
    })
    .join (",")
}
