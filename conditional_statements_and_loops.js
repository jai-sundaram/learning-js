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