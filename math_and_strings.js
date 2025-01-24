//there are many math methods
console.log(Math.round(3.14));
//if u want to ALWAYS round DOWN
console.log(Math.floor(3.9))
//to always round up
console.log(Math.ceil(3.1));
//findingn the minimum values 
console.log(Math.min(1,2,3,6,5));
//finding the maximum
console.log(Math.max(1,2,6,3,2));
//taking the power of something 
console.log(Math.pow(2,3));
//square root
console.log(Math.sqrt(81));
//random numbers
//simply the math method will return a number between 0 and 1 
console.log(Math.random());

//getting a random number within a certain range
let min = 1;
let max = 20;
//to make sure that it is an integer value, simply round it 
const randomNum = Math.round(Math.random() * (max-min) + min);
console.log(randomNum);

//strings 
//there are two kinds of strings
//one is a string literal - "", '', ``

//can also make a string using the String object
const naame = new String('Joe');
//the type of this variable would be object 
console.log(typeof naame);

//there are built in methods that help us operate and manipulate strings 

let sentence = "A new sentence";

//the includes method sees if a given sentence includes a provided piece
//returns a true/false value 
const doesIncludeNew = sentence.includes("new");

//can acess characters by index value
//first character has an index of 0 
console.log(sentence[0]);

//startswith method - sees if the sentence starts with that given character 
const startsWithA = sentence.startsWith('A');

//the endsWith method operates exactly the same 

//the replace method
//first parameter is the string we are replacing, second parameter is the thing we are replacing it with 
let updatedSentence = sentence.replace('new', 'short');

///the trim method helps deal with spaces the user might have entered at the beginning or end of the sentence 

let weirdSentence = " A new sentence. ";
trimmedSentence = weirdSentence.trim();
console.log(trimmedSentence);
//also have the trimLeft and trimRight methods, which operate with the same logic 

//split method 
//splits the word in a sentence into an array
//splits the sentence whenever it encounters an empty space 
const wordsInASentence = sentence.split(' ');

//can also make a string lowercase/uppercase
let example = "AcarBustruck@gmail.com"
let lowerCaseExample = example.toLocaleLowerCase();


//can also create string literals using back ticks 
let firstName  = 'jai';
let secondName = 'sundaram';
let fullName = firstName + ' ' + secondName;

//cleaner way of accomplishing the same thing
//using `` and the ${} instead, similair to how it kinda is in python 
fullName = `${firstName} ${secondName}`;


//the date object
let now = Date();
//creates a date object based off the current day and time 
//create a date object that will represent the number of milliseconds from jan 1, 1970
//the 0 represents 0 millseconds after jan 1, 1970
let jan1_1970 = new Date(0);

//can create specific dates
const dateOne = new Date('December 25 2024 16:08');
//another format 
//year, month, day, 
//first index of monmth is 0 
const Jan1_2024 = new Date(2024, 0, )


