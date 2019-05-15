/* istanbul ignore next */

/**
 * @returns {boolean}
 */

export const canUseDom = Boolean (
  typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
)
