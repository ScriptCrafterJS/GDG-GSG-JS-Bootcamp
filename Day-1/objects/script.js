  // Objects

  //// simple example
  // let person = {
  //     name: 'John',
  //     age: 10
  // };
  // console.log(person)

  //method to know the datatype
  // var emptyObject = {}; 
  // console.log(typeof emptyObject); 


  // let obj = {
  //     details: {
  //       address: "123 Main St",
  //       phone: "123-456-7890"
  //     }
  //   };
  // console.log(obj)


  //example for multiple data type and 2ways to access them
  // const person = {
  //     name: 'Ali',
  //     age: 30,
  //     "last name": "motasem",
  //     address: {
  //       city: 'New York',
  //       state: 'NY',
  //       country: 'USA'
  //     }
  //   };
    // console.log(person.name); 
  //    console.log(person["age"]); 
  //   console.log(person.address["city"]); 
  //   console.log(person["address"].state); 
  //   console.log(person.address);
  //   console.log(person.height); 

  // console.log(person["last name"]) 

    // for(var key in person){
    //   console.log(key);
    // }
  // let quotient = 10 / "2";
  // console.log(quotient);



  // const person = {
  //     firstName: "ali",
  //     lastName: "Adel",
  //     age: 23,
  //     isEmployed: true,
  //     sayHello: function(){console.log("hi")},
  //     sayGood: () => console.log("asdf"),
  //     start() {
  //     console.log("start learning JS ");
  //      }

  //  }
  // person.sayHello()
  // person.start();

  // delete person.age;
  // person.job = "engeneer";

  // person.drive = function() {
  //     console.log('The car is driving');
  //   };
    



  // //Objects are assigned by reference

  //   let car1 = { make: 'Tesla', model: 'Model 3' };
  //   let car2 = car1;
    
  //   console.log(car1.make); 
  //   console.log(car2.make); 
    
  //   car1.make = 'Toyota';
    
  //   console.log(car1.make); 
  //   console.log(car2.make);





  // // Objects with const
  // const car = { make: 'Tesla', model: 'Model 3' };

  // car.make = 'Toyota'; 
  // console.log(car.make); 

  // car.color = 'Red'; 
  // console.log(car.color); 

  //car = { make: 'Ford', model: 'Mustang' };



  // //Objects passed as a reference

  // function paintCar(car, color) {
  //     car.color = color;
  //   }
    
  //   const myCar = { make: 'Tesla', model: 'Model 3' };
  //   paintCar(myCar, 'Red');
    
  //   console.log(myCar.color); 
  //   console.log(myCar);




  //// comparing between 

  // let num =10;
  // function increase(num){
  //     num++;
  // }
  // increase(num);
  // console.log(num);



  // let obj = {value: 10};
  // function increase(obj){
  //    obj.value --;
  // }
  // increase(obj);
  // console.log(obj);


  ///primitive types are copied by their value 
  //Object types are copied by reference


  ////Exercise 
  // Initial grades object
  // let grades = {
  //     math: 90,
  //     science: 80,
  //     english: 85
  //   };
    
  //   // 1. Add a new course and grade
  //   function addCourse(courseName, grade) {
  //     grades[courseName] = grade;
  //   }
    
  //   // 2. Find the grade for a course
  //   function findGrade(courseName) {
  //     return grades[courseName];
  //   }
    
  //   // 3. Update the grade for a course
  //   function updateGrade(courseName, newGrade) {
  //     grades[courseName] = newGrade;
  //   }
    
  //   // 4. Calculate GPA (average of all grades)
  //   function calculateGPA() {
  //     let sum = 0;
  //     let count = 0;
    
  //     for (let course in grades) {
  //       sum += grades[course];
  //       count++;
  //     }
  //     return sum / count;
  //   }
    
  //   addCourse("history", 88);                    
  //   console.log("Math grade:", findGrade("math")); 
  //   updateGrade("science", 85);                 
  //   console.log("All grades:", grades);         
  //   console.log("GPA:", calculateGPA());  

