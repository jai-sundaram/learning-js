//technically, in js, elements can be of any data type
//however, in real applications, elements are usually of the same data type 

//adding elements
const numbers = [5, 4, 3, 2, 1];
//adding a value to the end
numbers.push(7);
console.log(numbers);
//can add multiple
numbers.push(8, 9, 10)
console.log(numbers);
//adding a number to the front
numbers.unshift(25);
console.log(numbers);
//similairly we can do multiple at once 
numbers.unshift(24, 23, 22, 21)
console.log(numbers);
//adding values to the middle 
//using the splice method
//first argument is the index u want to start from
//second argument is the number of elements u want to delete 
//third argument is what data u want to add 
numbers.splice(0, 1, 25, 24);

//finding primitives in arrays 
const numbers2 = [5, 4, 3, 2, 1, 5];
//get the index of a certain value 
const indexOfThree = numbers2.indexOf(3);
//if not found, it will return -1
//indexOf searches left to right, so it will find the leftmost index
//to get the last index: 
const lastIndexOf5 = numbers2.lastIndexOf(5);
//acessing the element at index -1 would result in undefined 

//can also use an includes method
if (numbers2.includes(2)) {
    console.log('found');
}

//finding elements (references)
const employees = [
    {
    id: 1,
        name: 'jim'
},
{
    id: 2,
    name: 'scott'
},
{
    id: 3,
    name: 'pam'
}

    
];
//cant use includes getIndexOf, because even comparing objects with the same properties wont be equal bc they have different memory addresses
//use the find method instead
//pass in a function, the function is referred to a callback function
//we call it a callback function bc we pass in a function as an argument, and it will be invoked at a later time 
//this particular type of callback function for the find method is called a predicate function, meaning it will return true or false
const employee = employees.find(function(e){
    //needs  to return a true or false
    //if a name of jim is found, it will return that element, if not it will return undefined 
    return e.name=='jim'
})
//returns the first element that matches 
console.log(employee);
//findIndex method works the same way 

//arrow functions as predicates 
//we previously used an anonymous function to define the callback function
//however there is a more modern syntax that is more commonly used - it is an arrow function 

const add = (num1, num2) => {
    return num1+num2;
}
/*
same as this:
function add(num1, num2){
return num1+num2}; */
///the result is being saved to the add variable     
//just another way of writing it - cleaner but more confusing imo

//removing elements from the array
let numbers3 = [1,2,3,4,5];
//.pop to remove from the end, .splice to remove from the middle, .shift to remove from the end
const lastElement = numbers3.pop();
console.log(lastElement);
console.log(numbers3);

//removing the first element
console.log(`first element: ${numbers3.shift()}\n`);
// \n creates a new line 

//remember splice can be used to add to the middle of an array, or remove from the middle of an array
//first argument is the index to start at, second argument is the number of elements to delete starting at the index specified, and argument after that is optional and it will specify the new values to add 
//so in this case, deleting the value at index = 1
const middleElement = numbers3.splice(1,1);
console.log(middleElement);

//emptying/clearing an array
//setting the length of the array to 0 will automatically clear it out 
//numbers.length = 0;

//can also use the splice method 
//numbers3.splice(0, numbers3.length);

//can simply assign it to a new empty array
//previous array will be garbage collected 
numbers3 = [];

//combining and slicing arrays
const exampleNumbersA = [1,2,3];
const exampleNumbersB = [4,5,6];
//can use the concat method to combine the two arrays 
const combinedArray = exampleNumbersA.concat(exampleNumbersB);
console.log(combinedArray);

//can also slice the array
//first argument is the start index, second argument is last index 
//it will not affect the existing array 
const firstSlice = combinedArray.slice(0,4);
//the second argument is exclusive, so the last item will be the one in the index before it 

//spread operator - another way to combine arrays 
//this is the more common way of combining arrays 
//furthermore, it allows us to add other elements
let combined = [...exampleNumbersA, 9, ...exampleNumbersB, 10];

//similairly to objects, we can use the spread operator to create copies of arrayys 
let exampleArrayC = [1,2];
let exampleArrayD = [...exampleArrayC];


//iterating over an array 
const numbers4 = [1,2,3,4];
for (let number of numbers){
    console.log(number);
}

///can streamline doing this by using the for each method and utillizing the arrow functions 
//number is that current element (in this case number)
//we can also include the index{
numbers4.forEach((number, index) => {
    console.log(`At ${index}: ${number}`);
}); 
//fyi: it is possible to clean up this for loop even more, but i feel like it is more readable in this format 


//to transform an array into a string, use the join method 
const numbers5 = [1,2,3,4];
//we need to pass in a seperator in as a parameter, the seperator is basically the thing that will be between each element when in string form
//in this case it will be a comma
const joinedNumbers = numbers5.join(', ');
console.log(joinedNumbers);

//can also do the opposite, split a string into a array
const courseName = 'Javascript for beginners';
//again passing in a seperator as a parameter, in this case
//the string will be split everytime there is a space
const parts = courseName.split(' ');
//javascript will be at 0th index, for will be in 1st index, beginners will be in 2nd index 
console.log(parts);
//can put it back together
let urlSlug = parts.join('-');
//also can make it completely lowercase
urlSlug = urlSlug.toLowerCase();
console.log(urlSlug);

//sorting arrays
//js arrays come in with a built in sort method 
//by default, it sorts the array in ascending order 
let characters = ['c','d','b','a'];
characters.sort();
console.log(characters);
characters.reverse();
console.log(characters);
//can also reverse the elements using the reverse method
//putting it in reverse order 

//however, when u are dealing with objects, u need to provide a callback function that defines the logic for the sorting/reversing
let employees2 = [
    {eId: 1, eName: 'Jen'},
    {eId: 2, eName: 'Steven'},
    {eId: 3, eName: 'Andrew'},
    {eId: 4, eName: 'Terry'},

];
//lets say we want to sort it by name 
//need to pass into parameters, which represents two elements
//in this case, two objects being compared
employees2.sort((a,b)=>{
    //comparing objects based on one of the properties 
    //in this case, the name property
    //the callback function returns a number that determines the sort order
    //returning a negative value means that the first argument comes before the second argument 
    //returning 0 means that they are considered equal, and are in sorted order 
    //returning a positive value means that the first argument comes after the second 
    //going to convert everything to lowercase to avoid case senstivity
    const lowerCaseA = a.eName.toLowerCase();
    const lowerCaseB = b.eName.toLowerCase();
    if(lowerCaseA < lowerCaseB){
        return -1;
    }
    else if(lowerCaseA > lowerCaseB){
        return 1;
    }
    else{
        return 0;
    }
});
console.log(employees2);

//testing elements in arrays 
//the .every() and .some() methods are used to test elements in an array against some condition 
//.every() tests if all the elements in the array pass the test implemented by the function, return true if it does, false otherwise
//lets check if every number in an array is even 
const numbers6 = [2,4,6,8,10];
//accepts a callback function
//first parameter is the current element of the array
//second parameter is the index of where the element is stored
//3rd parameter is the array where the element is stored
//only the first parameter is mandatory
//making sure the remainder when dividing by 2 is 0 - this means that the number is even 
const areAllEven = numbers6.every(number => {
    return number % 2 == 0;
});
console.log(`areAllEven: ${areAllEven}`);

//the .some() method checks if atleast one element array passes the test implemented by the provided function
//returns true as soon as one elemen satisfies the provided function
const numbers7 = [1,2,3,4,7,9];
//same parameters as every, only the first parameter is mandatory (the element)
const hasOneEvenNumber = numbers.some(number => {
    return number % 2 == 0;
});
console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`);

//filtering an array
//the filter method is designed to extract elements that meet a certain condition, creating a new array comprised of only those elements
;let numbers8 = [1,2,3,4,5,6];
//filtering the array so that we only have even numbers 
//the method accepts a callback function
//for each element in the original array, the filter method calls this callback function
//if the function returns true for an element, that element is included in the new array returned by the filter method 
const evenNumbers = numbers8.filter(number =>{
    return number % 2 == 0;
});
console.log(evenNumbers);

//looking at a more complex example of an array of objects 
const employees3 = [
    {
        theId: 1,
        theName: 'alice',
        role: 'developer',
    },
    {
        theId: 2,
        theName: 'bob',
        role: 'designer',
    },
    {
        theId: 3,
        theName: 'charlie',
        role: 'developer',
    },
    {
        theId: 4,
        theName: 'danielle',
        role: 'manager',
    }
];
const developers = employees3.filter((employee) =>
{
    return employee.role == 'developer';
}

);
console.log(developers);

//the .map method
//cornerstone of array manipulation in javascript
//operates on each element of an array, applying a function you specify, and returns a new array composed of the results
//doesnt alter the original array 
//example: squaring each number in an array of numbers 
const numbers9 = [2,4,6,8,10]
constSquaredNumbers = numbers9.map((number) =>
{
    return number * number; 
}
);
console.log(constSquaredNumbers);
//it works with any data type
//for example, converting an array of characters to uppercase
const characters2 = ['a', 'b','c','d'];
const upperCaseCharacters = characters2.map((char) =>{
    return char.toUpperCase();
});
console.log(upperCaseCharacters);

//we will have alist of employees, and we want to normalize their email addresses to lowercase
const employees4 = [
    {aName: 'Alice',
     aEmail: 'AliCe@gmail.com'
    },
    {aName: 'Steven',
        aEmail: 'StEven@gmail.com'
       },
       {aName: 'Joe',
        aEmail: 'jOe@gmail.com'
       }   
];
const updatedEmployees = employees4.map(employee =>(
{
    //curly brace is for the object literal we will be returnig 
    //using the spread operator to copy over all the properties into the new object we are returning 
    ...employee,
    aEmail: employee.aEmail.toLowerCase()

}
)
);
//.map iterates over each employee object, creating a new employee object that preserves the original property while transforming the email property to lowercase
//the spread operator ensures that we aren't modifying the original objects 
console.log(updatedEmployees);

//reducing an array
//the reduce method can transform an array into a single number, string, object, or even another array 
//lets say we have an array of numbers and we want to calculate their sum 
//traditional way of doing it 
numbers10 = [1,10,5,14];
let sum = 0;
for(const num in numbers10){
    sum += num;
}

//there is a cleaner way to acheive the same result using the reduce method
//the reduce method iterates through each element in the array, applying the function you define and accumulates the result into a single value 
//using the reduce method to sum an array of numbers 
//specify two parameters - the accumulator, and the currentValue
//the first parameter for reduce was the callback function, second optional parameter was the is the initial value
const sum2 = numbers10.reduce((accumulator, currentValue) =>
{
    //we want to return the accumulator + the current value
    //the accumulator is the accumulated result of the previous function calls 
    return accumulator + currentValue;
}

, 0)
//once the reduce method repeats the process for each element, it returns the final result 
console.log(sum2);
;

//THE STUFF IN THE PURPLE BRACKETS IS BASICALLY THE PARAMETERS OF THE CALLBACK FUNCTION

