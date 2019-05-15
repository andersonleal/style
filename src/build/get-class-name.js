export function getClassName (params = {}) {
  const emit = params.emit
  const identifier = params.identifier

  return emit ? identifier : null
}
