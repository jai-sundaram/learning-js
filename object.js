const dog = {
    name: 'max',
    breed: 'dachshund',
    age: 5,
    weightInPounds: 12,
    //can also add functions to an object
    eat: function(){
        console.log('chomp');
    },
    bark(){
        console.log('woof!');
    }
    //when we  have a function within an object, we call it a method 
}
//we can also make a function return an object
//specify parameters
function getDog(theName, theBreed, theAge, theWeightInPounds){
    return{
        name: theName, 
        breed: theBreed,
        age: theAge, 
        weight: theWeightInPounds,
        eat(){
            console.log('chomp');
        },
        bark(){
            console.log('woof');
        }

    }
}
//we can now create a dog object
const anotherDog = getDog('marley','lab', 3, 60);
console.log(anotherDog);
//factory functions offer an efficient way to create new objects 
//factory functions is not the common way of creating new objects
//instead, mostly constructor functions are used to constructor the inital state of an object
//constructor functions use the this keyword, this is basically the object callign the code 

function Dog(name, breed, age, weightInPounds){
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weightInPounds;

    //can also create the methods here 
    this.eat = function(){
        console.log('chomp');
    }

    this.bark = function(){
        console.log('woof');
    }

}
//creating an object with the constructor function
const oneMoreDog = new Dog('marley', 'lab', 3, 60);

//we can also modify objects
const person = {
    name: 'steven'
}
person.favoriteFood = 'tacos';
console.log(person);
//another way of adding it
person['favoriteIceCream'] = 'chocolate';
delete person.favoriteFood;
console.log(person);
//can also add methods on the fly 
person.eat = function(){
    console.log('start eating');
}
//calling the method 
person.eat();
//we used the const keyword, we cannot assign it to another value 
//but we can still change the properties and methods of the object 

//in javascript, functions are objects


function add(num1, num2){
    return num1 + num2;
}
//this function here is an object in javascript
//it is an object in memory 
const n = add
//can then call and invoke this function
console.log(n(1,2));
//The function 'add' has members, meaning that it has properties and methods 

console.log(add.length);
//shows the number of parameters the method has 

function Programmer(name){
    this.name = name;
    this.writesCode = function(){
        console.log('writes code in js');
    }
}
//this constructor function is an object in memory 
console.log(Programmer.length);


//can also create objects in this manner as well
const anotherProgrammer = new Function('smnName', `
    this.smnName = smnName;
    this.writesCode = function(){
    console.log('code in js');
    }
    `);
const programmer2 = new anotherProgrammer('steven');
programmer2.writesCode(); 

//value vs reference types 
//they differ in how they are allocated in memory
let a = 10;
let b = a;
a = 20;
console.log(a);
console.log(b);
//primive values are passed by copy, not by reference

//referene types 
let c = {value: 20};
let d = c
c.value = 100;
console.log(c);
console.log(d);
//they are both referencing the same object in memory, the same address in memory 

//enumerating properties of an object   

const dog3 = {
    name: 'max',
    age: 5,
    eyeColor: 'blue',
}

//returning the keys of the object as an array
const keys = Object.keys(dog);
//can all get all the values stored as an rray
const values = Object.values(dog);

//can also get an array of the properties themselves 
const entries = Object.entries(dog);

//can enumerate through these values
for(const key of Object.keys(dog)){
    console.log(key);
}
for(const value of Object.values(dog)){
    console.log(value);
}
for(const key of Object.entries(dog)){
    console.log(entries);
}

//cloning an object
let x = {value: 10};
let w = x;
//since they reference to each other, if u change one it will change the other
w.value = 9;
console.log(w);
console.log(x);

//if u wanted it to be so that if u change one object, but dont want to affect the other, u need two independent object
//this can be done by creating a clone of an object
let k = {value: 10};
//let m = {};
//using the Object.assign method 
//first parameter is the target object, the object u want to copy to 
//second parameter is the source object, which we are copying 
//Object.assign(m, k)

//however, there is a simpler way of cloning
//when initializing, put ...[object which we are copying]
let m = {...k};
k.value = 8;
console.log(m);
console.log(k);

//dont have to manually delocatting memory for unused objects 
//javascript automatically does it using garbage collection
