10;
var sum = function (a, b, c, d, type) {
    if (type === "number") {
        return +a + +b + +c + +d;
    }
    return a.toString() + b.toString() + c.toString() + d.toString();
};
console.log(sum(10, 20, 30, 40, "number"));
console.log(sum('Z', 'E', 'S', 'H', "string"));
