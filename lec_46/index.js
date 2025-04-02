// // global scope

//var age = 15;

// console.log(age);

// {
//     console.log(age)
// }
// if(true){
//     console.log(age)
// }
// for(let i=0; i<2; i++) {
//     console.log(age);
// }

// function sayHello() {
//     console.log("hi ", age);
// }
// sayHello();



// function scope...........


// function sayHello() {
//     var fullName = "Earth";
//     console.log("Hello Dunia ", name);
// }

// console.log(fullName); //  dono blocks ke bahar variable access nahi kar sakte
// sayHello();



// Block scope...........



// {
//     var height = 180;
// }

// console.log(height); // var blocks ke bahar bhi use hote hain lekin Let and Const blocked scope hote hain isliye brackets ke bahar accesss nahi kar sakte


// {
//     let age = 100;
// }

// console.log(age);



//Temporal Dead zone

// console.log(marks);
// console.log("babbar");
// console.log("Love");
// const marks = 100;
// console.log(marks);   // let or const use karne pe variable hoisting nahi ho pati hai