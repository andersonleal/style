const sort = (input) => {
  if (typeof input !== "object" || input === null) {
    return input
  }

  const result = Array.isArray (input) ? [] : {}

  Object.keys (input)
    .sort ()
    .forEach ((key) => {
      result[key] = sort (input[key])
    })

  return result
}

export const sortJSON = (input) => {
  const result = JSON.stringify (sort (input), null, 2)

  return result[result.length - 1] === "\n"
    ? result
    : [result, "\n"].join ("")
}

export default sortJSON
