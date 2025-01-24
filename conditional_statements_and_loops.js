//if else statements
//simlair to how it is in java
let priceOfChocolate = 1.99;
let hasAmountInCash = 0;
const canBuyChocolate = hasAmountInCash >= priceOfChocolate;
if(canBuyChocolate){
    console.log("enjoy ur purchase");
}
else{
    console.log('not enough money');
}
///also have the option of else if 
let hour = 10;
if(hour >= 6 && hour <=12){
    console.log("serving breakfast");
}
else if(hour > 12 && hour <=14){
    console.log("serving lunch");
}
else{
    console.log('serving dinner');
}
//if you find yourself having a long chain of if and if else statements, it might good idea to use switch case statements 
let job = 'Cloud Engineer'; 
switch(job){
    case 'Software Developer':
        console.log('Writes code');
        break;
    case 'Designer':
        console.log('Makes user interface Documents')
    case 'Cloud Engineer':
        console.log('Manages and deploys cloud resources');
        break;
    default:
        console.log('Works directly with customers');
}

//for loops
let numbers = [1, 2, 3, 4, 5, 6, 7]

//want to acess each value by index
for (let idx = 0; idx < numbers.length; idx++){
    console.log(numbers[idx]);
}
/*
for(let num = 0; idx < 100; i++){
    console.log(num);
}*/


//while loops
let idx = 0;
while(idx < numbers.length){
    console.log(numbers[idx]);
    idx++;
}
//another example of while loops 
let sum = 0;
while(true){
    console.log('Loop');
    sum++;
    //if the sum is greater than 10, break out of the loop  
    if(sum == 10){
        break;
    }
}

//do while loops
//not widely used, but good to be aware of it 
//in a regular while loop, we first check the condition then we do the action
//in a do while loop, we do the action and then check the condition 
let i = 0;
do {
    console.log(i);
    i++;
}
while(i < 10);



//ALWAYS MAKE SURE THE LOOPS TERMINATE


//for in loop

//in js, we have a syntax that also allows us to iterate through the keys of a javascript object   
const course = {
    name: "JavaScript for beginners",
    duration: 3,
    sections: 7
}
//the for in loop is used with javascript objects to allows us to iterate over the javascript object and get acess to the keys 
//will retrieve all the keys in the course 
for(const key in course){
    console.log(course[key]);
}

//for of loop 
//usually used when iterating over an array, will be more simple 
//element in this case is the actual element in the list, not the index 
console.log('printing using for of loop');
for(let element of numbers){
    console.log(element);
}

//break and continue statements 
//continue statement means that u want to skip the current iteration of the loop
//move on to the next iteration of the loop 
console.log('using continue statement');
for(let i = 0; i < 10; i++){
    if (i%2 == 0){
        continue;
    }
    console.log(i);
}
//another example
console.log('another example');
let j = 0;
while(j < 10){
    j++;
    if(j%2==0){
        continue;
    }
    console.log(j);
}
let obk = {
    a: 1,
    b: 2,
    c: 3
}
//final exampls 
console.log('final example');
for(const key in obk){
    if(key == 'b'){
        continue;
    }
    console.log(obk[key]);
}

function fizzbuzz(num){
    if(num %3 == 0 && num %5 == 0){
        return 'fizzbuzz';
    }
    else if(num %3 == 0){
        return 'fizz';
    }
    else if (num%5 == 0){
        return 'buzz';
    }
    else{
        return num;
    }}
    function printEvens(arr){
        for(let element of arr){
            if(element % 2 == 1){
                continue;
            }
            console.log(element);
        }
    }
    printEvens([1,2,3,4,5,6,7,8,9])
