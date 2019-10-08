export const isJSON = (input) => {
  let str = input

  if (typeof input !== "string") {
    str = JSON.stringify (input)
  }

  try {
    const isValid = JSON.parse (str)

    if (isValid && typeof isValid === "object") {
      return true
    }

    return false
  } catch (e) {
    return false
  }
}

export default isJSON
