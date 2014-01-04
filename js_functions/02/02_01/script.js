// window.prompt("testing")

// creating a variable called info and assigning it an object using {}
// var info {
// 	full_name: "Andrew Silbersmith", //
// 	title: "Web Developer",
// 	links: [
// 	{blog: "http://andrew-silbersmith-code.tumblr.com"},
// 	{twitter: "http://twitter.com/andrewawesomes"},
// 	]
// };

// We can also store the value of an object like the above full_name = me to a function instead...



var calc = {
	status: 'Awesome',
	plus: function(a,b){
		return(
			console.log(this), // this points to the entire object var calc = {....}
			console.log(a+b), // 
			console.log(arguments),
			console.log(this.status) // This allows you to use .notation and call something in the object
			)
	}
}


calc.plus(2,2)







