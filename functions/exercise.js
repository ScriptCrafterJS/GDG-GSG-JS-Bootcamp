// 💡Note: you have to use first-class function concepts: call-back functions, higher-order functions
// 💡Note: you need a calculator function
// 💡Note: your calculator will return the result of the operation and numbers passed to it
// operation (add machine, divide machine) based on the passed function and numbers

//! IMPORTANT:
// you have to build separated functions for each operation (add, subtract, multiply, divide)
// and use them in your calculator

// TIP: i want the calculator to perform an add operation on two numbers means your calculator:
// should take: two numbers and one operation function as parameters

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operation){
  return operation(num1, num2)
}

console.log(calculator(5, 10, add)); // 15