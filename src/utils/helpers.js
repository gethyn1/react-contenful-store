// @flow

// Return a reduced price fixed to two decimal places
export const reducePrice = (original: number, reduction: number = 0) => {
  const reducedAmount = original - ((original / 100) * reduction)
  return +reducedAmount.toFixed(2)
}

export default reducePrice
