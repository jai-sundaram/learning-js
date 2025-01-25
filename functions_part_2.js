    //functions are the cornerstone of javascript, as they serve as reusable codeblocks 
    //in js, functions are objects 
    //two primary methods to create functions in javascript 
    //function declaration syntax and function expression syntax 

    //function declaration
    function sayHi(){
        console.log('hi');
    }
    sayHi();

    //function expression syntax 
    let sayHi2 = function(){
        console.log('hi2');
    }
    //in this case we have an anonymous function, and we just assign the result to a variable

    //can also make it not anonymous 
    let greeting = function sayHi3(){
        console.log('hi23');
    }
    sayHi2();
    greeting();

    //a key difference between the function declaration syntax and the function expression syntax lies in the behavior related to hoisting 
    //in the function declaration method, it is possible to call the method before it is declared
    //this is due a javascript mechanism called hoisting
    //hoisting  is a mechanism in the javascript engine where it automtically moves the function declaration to the top of the scope before code execution
    //this allwos them to be called before they are defined in the program 
    function add(num1, num2){
        console.log(num1+num2);
    }

    //hoewver, hoisting doesnt work for the function expression syntax
    //this is because function expressions are not hoisting in the same way

    //function arguments
    //we will see how functions handle arguments in javascript 
    /*
    function multiply(num1, num2){
        return num1 * num2;
    }*/
    console.log(multiply(2,2));
    //lets say we only provided one argument
    //console.og(multiply(2)));
    //the parameter that didnt get any argument will automatically be assigned to undefined 
    //makes sure that functions dont break even when they get fewer arguments then expected, but you might get some unexpected results 

    //it is possible to pass in more arguments than expected
    //multiply(2,2,4);

    //can also print out the arguments
    function multiply(num1, num2){
        /*console.log(arguments); 
        return num1 * num2;*/

        //we can make it so that we can accept any number of parameters and multiply them all together 
        let product = 1;
        for (const num of arguments){
            product *= num;
        }
        return product;
        //now we can accept 2, 3, 4, or more arguments and still multiply them all together
        //while arguments is array-like, it is not an actual array 
        //for example it is iterable, but it it lacks array methods like .map or .reduce s
    }
    console.log(multiply(3,4,4));

    //the rest operator 
    //the rest operator allows u to represent an indefinite amount of arguments as an array 
    let course = {
        name:  'Javascript for Beginners',
        duration: 3
    }
    let newCourse = {...course,
        name: 'Javascript Pro',
    };
    console.log(newCourse);

    //when we use the ...operators, we refer to it as the rest operator 
    //unlike the spread operator which expands an array or object, the rest operator allows us to gather a varying amount of arguments into a single array parameter 
    //this is useful when we want the function to accept an indefinite number of arguments 

    function multiply2(...arguments){
        //allow us to specify a varying number of arguments which we pack into an array 
        //so we can use the array method reduce to reduce all the values in the array to a single value 
        //in this case it will result in the product of multiplying all the values together  
        //1 is the starting value 
        return arguments.reduce((accumulator, currentValue) => accumulator * currentValue, 1); }

    //another example 
    function multiply3(multiplier, ...numbers){
        return numbers.map(number => number * multiplier);
    }
    console.log(multiply3(2, 1,2,3,4));
    //in this case, each number in the array ([1,2,3,4]) will be doubled 


    //default parameter
    function writeCode(language){
        console.log(`write code in ${language}`);
    }
    writeCode('javascript');
    //if we didnt pass any arguments, language would be undefined 
    //this is where default parameter come into place - we can assign a default parameter if one is not passed in explicitly 
    
    //when setting a default value, just set a value in the parameter 
    function codeDetails(language = 'js'){
        console.log(`writing code in ${language}`);
    }
    codeDetails();
    //can set default parameter for more than one parameter

    function createUser(name, role = 'guest', status = 'active'){
        console.log(`user: ${name}, role: ${role}, status: ${status}`);
    }
    createUser('steven');
    createUser('alice', 'admin', 'offline');
    createUser('james', 'admin',);

    //getters and setters
    const course2 = {
        name: 'JS for beginners',
        duration: '3 hours',
        //can provide getter and setter methods
        //to specify that it is a getter, use the get keyword before the method name 
        get details()
        {
          return `${this.name} is ${this.duration}`;
        },
        //setter methods 
        set details(value){
            //setting the values from a sentence provided
            let parts = value.split(' is ');
            this.name = parts[0];
            this.duration = parts[1];
        }
    };
    //basicaly getting the details property 
    console.log(course2.details);
    //setting the value
    //treat it like a property
    course2.details = 'javascript pro is 10 hours'
    console.log(course2.details);

    //slightly different from getter and setters in java 