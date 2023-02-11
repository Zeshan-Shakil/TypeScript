var sum = function (num1, num2) {
  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    throw new Error ('Invalid argument')
  }
  return num1 + num2
};
console.log(sum('10', 20));