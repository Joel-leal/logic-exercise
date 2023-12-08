const searchDividers = (x) => {
  let dividers = [];
  for(i = 0; i <= x; i++){
    if(x%i === 0){
      dividers.push(i)
    }
  }
  return dividers;
}
const MDCdue = (a, b) => {
  const dividersOfA = searchDividers(a);
  const dividersOfB = searchDividers(b);
  const ElementsEqual = [];
  for (i = 0; i <= dividersOfA.length; i++) {
    for (z = 0; z < dividersOfB.length; z++) {
      if (dividersOfA[i] === dividersOfB[z]) {
        ElementsEqual.push(dividersOfA[i]);
      }
    }
  }
  return ElementsEqual[ElementsEqual.length - 1];
}
const MDCmulti = (numbers) => {
  const i = numbers.length - 1;
  if(numbers.length > 0 && numbers.length < 3 ) return MDCdue(numbers[i], numbers[i-1])
  const newNumbers = numbers.filter((e) => e !== numbers[i])
  return MDCdue(numbers[i], MDCmulti(newNumbers))
}