function greeting(name = "user", age = 100) {
  console.log("Hello " + name + ", your age is " + age);
}

// 💡Note: executeCallback is also called as "Higher Order function" because it takes a function as a parameter
// 💡Note: greeting is also called "callback function" when you pass it as an argument to another function
function executeCallback(callback) {

  callback("Ahmad", 25);
  
}




executeCallback(greeting);
