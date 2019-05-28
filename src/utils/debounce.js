export function debounce (func, wait = 0) {
  let timeout

  return function () {
    clearTimeout (timeout)
    timeout = setTimeout (func, wait)
  }
}
