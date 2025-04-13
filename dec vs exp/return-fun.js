//? 💡Note: use the factory analogy
// 💡Note: our factory function is called "Higher Order function" because it returns a function
function multiplier(factor) {
  // 💡Note: factor, is a variable that i pass to the factory it self

  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
const quadruple = multiplier(4);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(quadruple(5)); // 20
