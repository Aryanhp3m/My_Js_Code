
// class Human {
//     // properties
//     age; // public mark
//     #wt = 80;  // private mark class ke bahar access nahi hoga   # this.#wt aise show kar sakte hain
//     ht = 180;



//     //constructor.............

//       constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//       }

    
//     //behaviour

//     walking(){
//         console.log("I am walking")
//     }

//     running() {
//         console.log("I am running")
//     }
    
//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(val) {
//         this.#wt = val;
//     }

// }

// let obj = new Human(50, 190, 101);
// console.log(obj.fetchWeight);

// obj.walking();



// Default parameters ..............

// one default parameter

// function sayName (myName = "Prabhu Deva") {
//     console.log("My Name is: ", myName);

// }

// sayName("Aryan")



// multiple default parameter.......

// function sayName(fName, lName) {
//    console.log("My Name is: ", fName," ", lName);

//  }

// sayName("Aryan", "kumar");



// jo default parameter set karenge wo ek object hoga


function solve(value = {age:15,wt:90, ht:190}) {
    console.log("HELLO JEE", value);
}
solve(15);

