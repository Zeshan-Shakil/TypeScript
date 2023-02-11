let sum = (
  num1: string | number,
  num2: string | number,
  typ: "as-number" | "as-string"
) => {
  if (typ === "as-number") {
    return +num1 + +num2;
  } else {
    return num1.toString() + num2.toString();
  }
};
console.log(sum(5, 10, "as-number"));
console.log(sum("5", "10", "as-string"));

// y literal types hn mtlb k jo likhy hn bs whi assign kr skty hn us k ilawa kuch ni
