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
const numbers3 = [1,2,3,4,5];
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