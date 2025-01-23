/*
the basic operations like +, -, *, %, / 
are the same as they are in java */
//one key point is to power of, which is **
//so 3 to the power of two is:
// 3 ** 2 
console.log(3 ** 2);
//incrementing/deccrementing balues works the same as it does in java
let a = 1;
a++;
//can also do ++a;
console.log(a);
a--;
console.log(a);

//comparison operators
//<=, >=, <, >
let num1 = 14;
let num2 = 10;
//creating a boolean variable of the result 
const isNumGreater = num1>num2;
console.log(isNumGreater);

//equality operators 
let b = 2;
let c = '1';
//loose equality 
console.log(b==c);
//truthy, doesn't check if the data types are the same  

//strict equality
console.log(b===c);
//dosen't convert it, compares it as is 

//furthermore, in loose equality
//'1' is equal to true
//'0' is equal to false

//in order to skip the confusion, use strict equality so ===


//ternary operator
//basically a conditional opertor
let age = 16;
//in the below statement, we are first checking if age is greater than or equal to 16
/// ? ins ternary operator, meaning that if the statement is true, it will return true. otherwise return false 
const canDrive = age>=16 ? true: false;
console.log(canDrive);

//another example 
let points = 110;
///in the below example, we are first seeing if the points variable is greater than 100
//? is the ternary operator. if the statement  is true, return gold
//otherwise return silver 
const customerType = points > 100 ? 'gold': 'silver';
console.log(customerType);
//the type of the customerType variable is String
console.log(typeof customerType)

//logical operators
// || (or), && (and), ! (not), ?? (null coalescing)
console.log(true || true);
//the or operator is evaluated left to right 
console.log(true && false)
//furthermore, both these operators convert the operand to a boolean type if it is not already of that type 
let hasCar = true;
let willDrive = age >=16 && hasCar;
console.log(willDrive);
hasCar = false;
willDrive =  age>=16 && hasCar;
console.log(willDrive);

//the && is evaluated before the ||
//for example:
let e = true, f = true, g = true, h = true
console.log(e && f || g && h)
//is the same as 
console.group((e && f) || (g && h))

//boolean not operator
console.log(!true);

let isClosedOnSunday = true; 
let isRestaurantOpen = !isClosedOnSunday;
console.log(isRestaurantOpen);

//coalescing null - ??
//if a value is null or undefined, we can supply a default value
let z = null;
let res = z ?? false;
//set value of res to value of z, otherwise set it to false
//this is basically the shortened version of 
res = (z!= null && z!= undefined) ? a:false;