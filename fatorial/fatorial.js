const factorial = (factor) => {
  if(factor === 1 || factor === 0) return 1
  const result = factor*factorial(factor-1)
  return result
}

