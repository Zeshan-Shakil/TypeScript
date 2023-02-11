type sumFunc = number | string = 10
let sum = (
  a: sumFunc,
  b: sumFunc,
  c: sumFunc,
  d: sumFunc,
  type: "number" | "string"
) => {
  if (type === "number") {
    return +a + +b + +c + +d;
  }
  return a.toString() + b.toString() + c.toString() + d.toString();
};
console.log(sum(10, 20, 30, 40, "number"));
console.log(sum('Z', 'E', 'S', 'H', "string"));
