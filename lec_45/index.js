
// Class hoisting...........

//aise bhi class hoisting possible nahi hai


// const object1 = new Human();
// class Human{

// }








// using function expression hoisting nahi ho payega......

// aise using function expression to nahi chalega error aayega


// sayHello();
// let sayHello = function (){
//     console.log("hello jee kaise ho sare")
// }




// aise work karega agar sirf upar main call kare normal function declaration karke

// sayHello();
// function sayHello(){
//     console.log("hello jee kaise ho sare")
// }        





// var age = 25;
// console.log(age);  undefined o/p



// sayMyName("Babbar");   .......use like this also

// function sayMyName(finalName) {
//     console.log(finalName);
// }




// fn assign to variable

// let greet = function() {
    // console.log("Greeting for the day")
// }
// 
// greet();



// how to pass the function

// function greetMe(greet, fullName) {
//     console.log("hello", fullName);
//     greet();
// }

// function greet() {
//     console.log("Greeting for the day")
// }  

// greetMe(greet, "Babbar");



// how to return the function
// 
// 
// function solve(number) {
    // return function(number) {
        // return number*number;
    // }
// }
// 
// let ans = solve(5);
// 
// let finalAns = ans(10);
// console.log(finalAns);



// use fn in data structure


// const arr = [ 
//     function(a,b) {
//         return a+b;
//     },
//     function(a,b) {
//         return a-b;
//     },
      
//     function(a,b) {
//         return a*b;
//     },

// ]

// let first = arr[0];
// let ans = first(5,10);
// console.log(ans);




// used in a object

let obj = {
    age:25,
    wt:36,
    ht:180,
    greet: ()=>{
        console.log("hello duniya");
    }
}

console.log(obj.age);
obj.greet();