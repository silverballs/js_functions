// window.prompt("testing")

// We can expand the functionality to a constructor by adding a method? 
// We can do that through that constructors prototype object
// Since js is a prototypal inheritance language..
// you can base the functionality of an object off of another object
// Every object can be based on another, every object in js is based on another object

// var Dog = function(){
// 	var name, breed;
// }

// firstDog = new Dog;
// firstDog.name = "Rover";
// firstDog.breed = "Doberman";
// console.log(firstDog)
// >> Dog {name: "Rover", breed: "Doberman"} 

// What if we wanted to give the ability to speak?
// We could add it the the above function, but later we then it's only available to Dog, and we
// may end up creating a new breed that can also speak... 

// add a new variable speak
// var speak = function(saywhat){
// 	console.log(saywhat);
// }

// var Dog = function(){
// 	var name, breed;
// }

// Dog.prototype.speak = speak; // this gives the dog the method speak

// firstDog = new Dog;
// firstDog.name = "Rover";
// firstDog.breed = "Doberman";
// firstDog.speak = "Woof";
// firstDog.speak('woof');

// console.log(firstDog)
// >> Dog {name: "Rover", breed: "Doberman", speak: "Woof", speak: function}
// if you wanted to just see if it worked you could do:

// giving another animal access to speak:

// var Cat = function(){
// 	var name, breed;
// }
// Cat.prototype.speak = speak;
// firstCat = new Cat;
// firstCat.name = "Wendyl";
// firstCat.breed = "somemix";
// firstCat.speak = "meowww";

// console.dir(firstCat)
// >>Cat
// >>breed: "somemix"
// >>name: "Wendyl"
// >>speak: "meowww"
// >>__proto__: Object
// >> VM637:2
// >>undefined

// Now we can start looking under the hood of how things get there properties... 
// Check it out... so if you go into the console and do:
// var checkIt = {} // remember anyhting in {} is an object. 
// console.dir(checkIt) returns:
// >> Object
// If we did console.dir(speak) we get see that it is a function:
// >> function (saywhat){ console.log(saywhat); }
// But, if we click on function, we will see that that is based on the Object constructor as well 

