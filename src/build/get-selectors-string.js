export function getSelectorsString (params = {}, compact = true) {
  const selectors = params.selectors || []

  return selectors
    .map (function (selector) {
      return selector.join ("")
    })
    .join (compact ? "," : ", ")
}
