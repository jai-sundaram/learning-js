//to run the program - open up the terminal inside the vscode
//then enter, node [programname].js
//shortcut for opening up the terminal in vs code - ctrl + '

//creating variables 
//use the let keyword
let firstName = 'Jai';
//can also do it in two different steps
let name;
name = 'rando';
//when naming variables, be cognizant of reserved keywords 
//printing out the variable
console.log(firstName);
//to create constants (doesnt change)
const christmas = '12.25'
//two different types of data: primitive and reference 
//primitive type : String, number, BigInt, boolean, undefined, null, Symbol 
//reference type: object

//three different ways of creating a string datatype 
let favoriteFruit = 'strawberries';
let favoriteIceCream = 'chocolate';
let favoriteProgrammingLanguage = 'JavaScript';

//creating number data type
//number datatype encompasses both integer value and decimal value 
let numberOfDonuts = 12;
let pi = 3.14

//bigInt
//just a very large numebr
let largeNumber = 5545454545454n;
//boolean
let lovesCoding = true;

//if a variablle is only declared but not instantiated (no value set), the value of the variable is undefined 
//for example:
let favoriteColor;
console.log(favoriteColor);

//we use null when we want to explicitly clear the value of a variable 
let favoriteSmn = 'car';
console.log(favoriteSmn);
favoriteSmn = null;
console.log(favoriteSmn);

//the symbol data type is used to create unique identifiers and objects 
const uniqueKey = Symbol();



//we can use the typeof command  to figure out the data type for a certain value 

//javascript is dynamically typed, meaning that a variable intially intialized with a certain data type CAN be set to a value of a different data type 

let testing = 'x';
console.log(typeof testing);
testing = 1;
console.log(typeof testing);
testing = false;
console.log(typeof testing);

//objects
//creating an object    
//btw objects have a key value pair 
//in this case name is the key, hours is the value
let course = {
    name: 'Javascript for Beginnners',
    hours: 3
}
//the key and the value are considered to be part of the object
console.log(course);
//can specifically output either the key or the value
console.log(course.name);
console.log(course.hours);
//can also reassign the properties
course.name = 'javascript course';
console.log(course.name);

//can also use bracket notation
console.log(course['name']);
///can also use the bracket notation to update values
course['name'] = 'Javascript Fundamentals';
console.log(course['name']);



//arrays
let productColors = ['blue', 'green'];
//accessing one element 
//like java access by index, index starts at 0
console.log(productColors[0]);
//can have different data types in one array
productColors[1] = 9;
console.log(productColors[1]);
//datatype of an array is object


//getting the length of an array
console.log(productColors.length);