//? make the parameters have default values
function greeting(name = "user", age) {
  console.log("Hello:" + name + ", your age is " + age);
}

// 💡Note: JavaScript knows that the parameters have no values so it gives them "undefined"
// an implicit value provided by the language
// greeting();

// greeting("Alice", 25);
// greeting("Charlie");
// greeting("Bob", null);

//////////////////////////////////////////////

// 💡Note: old school way was using conditions inside functions

// function greeting(name, age) {
//   if (name === undefined) {
//     name = "user";
//   }
//   if (age === undefined) {
//     age = 100;
//   }
//   console.log("Hello:" + name + ", your age is " + age);
// }
