export function getAncestors (ancestors = [], selectors = []) {
  return selectors.reduce (function (results, selector) {
    if (ancestors.length) {
      const index = selector.indexOf ("&")

      ancestors.forEach (function (ancestor) {
        results.push (
          index < 0
            ? ancestor.concat (" ", selector)
            : selector
              .slice (0, index)
              .concat (ancestor, selector.slice (index + 1))
        )
      })

      return results
    }

    return results.concat ([selector])
  }, [])
}
