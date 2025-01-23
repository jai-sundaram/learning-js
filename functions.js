//working with functions 
/*
format:
function [functionName](){
    [function code here]
}
    */
function sayHi(){
    console.log('hi');
}
//executing the function
sayHi();
//can also add and use parameters 
function sayHiName(name){
    console.log('hi'+name);
}


//types of functions
//by default, if we do not specify a return value, js will just make the function return undefined 
function multiply(num1, num2){
    return num1*num2;
}
console.log(multiply(3,2));

///example when no return value is specified
function multiply(num1, num2){
    let product = num1 * num2;
}
console.log(multiply(1,1));