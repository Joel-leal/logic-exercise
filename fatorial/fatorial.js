const fatorial = (fator) => {
  console.log(fator)
  if(fator === 1 || fator === 0) return 1
  const result = fator*fatorial(fator-1)
  return result
}

console.log(fatorial(0))