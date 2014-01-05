// window.prompt("testing")

// functions in javascript can do more than just help you create methods for existing objects like 02_01 calc
// functions can construct objects
// when using a constructor, it is conventional to use Capital letters when naming the variable
// using the new keyword creates a new instance of an object.
// When using the constructor operator, the this argument will point to each instance of the object, not the global object
// 

// var Dog = function() {
// 	var name, breed;
// }

// firstDog = new Dog;
// firstDog.name = "Rover";
// firstDog.breed = "Doberman";

// >> Rover
// 
// console.dir(firstDog)
// >>Rover script.js:16
// >>console.dir(firstDog)
// >>Dog
// >> breed: "Doberman"
// >>name: "Rover"
// >>__proto__: Object
// >>VM908:2
// >>undefined

// adding a second dawg
// secondDog = new Dog;
// secondDog.name = "Fluffy";
// secondDog.breed = "Poodle"


// console.log(firstDog.name)
// console.log(secondDog.name)
// >> Rover
// >> Fluffy

//console.dir(firstDog)
// >> Dog
// >> breed: "Doberman"
// >> name: "Rover"
// >> __proto__: Object
// >> undefined

// >> console.dir(secondDog)
// >> Dog
// >> breed: "Poodle"
// >> name: "Fluffy"
// >> __proto__: Object
// >> undefined


// MAKING THIS ALL EASIER USING THE THIS METHOD:

// var Dog = function (){
// 	var name, breed;
// 	return console.dir(this)
// }

// firstDog = new Dog;
// firstDog.name = "Rover";
// firstDog.breed = "Doberman";


// secondDog = new Dog;
// secondDog.name = "Fluffy";
// secondDog.breed = "Poodle"





