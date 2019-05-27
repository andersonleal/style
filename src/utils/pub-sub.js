export const pubSub = (function (subs) {
  return {
    "pub": function (b) {
      return subs.map (function (c) {
        return c (b)
      })
    },
    "sub": function (b) {
      const c = subs.push (b) - 1

      return function () {
        return delete subs[c]
      }
    }
  }
}) ([])
