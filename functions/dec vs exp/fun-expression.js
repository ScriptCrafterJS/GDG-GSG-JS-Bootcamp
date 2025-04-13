//💡Note: name of the function is not result, this is just the variable name ( the function is anonymous)
//! function expression cannot be used before it is defined
const result = function (a, b) {
  return a * b;
};

console.log(typeof result);
console.log(result(5, 10));
