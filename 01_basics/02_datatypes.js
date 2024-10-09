"use strict" //treat all js code as newer version

//alert(3+3) we are using node js not browserl

console.log(3+3); //code readability should be high


let name = "akhil"
let age = 3;
let is_logged_in = false

//primitive data type

// number => 2 to pwer 53
// bigint 
// string prefer double ""
//boolean true/false
// null => stand alone value is an object
// undefined 
// symbol 

//object
console.log(typeof undefined); // output is always undefined
console.log(typeof null); //output is null  

// primitive datatypes
// 7 types: string, number, boolean, null, undefined, symbol, bigInt, 

const id = Symbol('123')
const aid =  Symbol('123')
console.log(id === aid);

//const bnum = 8765456785678n // bigint


//******javascript is dynamically typed language//*********** */

// reference type (non-primetive)
// arrays, objects, functions

const h = ["ironman", "doga", "fly"]
let obj={
    name:"akhil",
    age:22,
}


const myfunction=function(){
    console.log("hello world");
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//memory are of two types
// stack, heap
//primitive type uses stack
//non-premetive uses heap
let mytname = "freakstar"
let aytname = mytname
aytname = "MR.POKER"
console.log(aytname);
console.log(mytname);
let userOne = {
    email:"asdasd@gmail.com",
    upi:"asdasd@ybl"
}
let userTwo = userOne

userTwo.email = "akhil@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);





