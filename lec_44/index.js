// objects :- collection of key values
// Key:values



//  let obj = {
//      name: "Love",
//      age: 25,
//      weight: 85,
    
// };
// console.log(obj)



// let obj = {
//     name: "Aryan",
//     "full name" : "Aryan kumar"
//     // key  values ke andar space hoga than double inverted comma lagane ki jarurat hai otherwise nahi hai

// };
// console.log(obj)     



// with obj how to add function :-


// let obj = {
//     name: "love",
//     age : 25,
//     weight : 85,
//     greet: function() {
//         console.log("hello jee kaise hain saare");
//     }

// };
// console.log(obj)
// obj.greet();


// H/W

// read about shallow copy and deep copy



// creation of arrays

// let arr = [1,2,3,4,5];
// console.log(arr);

//array constructor 
// let brr = new Array('love',1,true);
// console.log(brr);

 
// built-in methods

// let brr = new Array('love',1,true);
// brr.push('Babbar');
// brr.pop();

// brr.shift();
// brr.unshift('love babbar');
// brr.push(20);
// brr.push(40);
// brr.push(70);

// // brr.slice(2,4);
// // console.log(brr.slice(2,4));

// brr.splice(1,2,'kunal');

// console.log(brr);


// Map.........


// let arr = [10,20,30];

// let ansArray = arr.map((number) => {
//     return number*number;
// })
// console.log(ansArray)


//Filter......


// let arr = [10,20,30,11,21,44,51];
// 
// let evenArray = arr.filter((number) => {
    // if(number%2 == 0) {
        // return true;
    // }
    // else {
        // return false;
    // }
// });
// 
// console.log(evenArray)


// Reduce......


// let arr = [10,20,30,40];
// 
// let ans = arr.reduce((acc,curr)=> {
    //   return acc + curr; 
// }, 0)
// 
// console.log(ans);



// Sort......


// let arr = [9,1,7,4,2,8];
// arr.sort();
// 
// console.log(arr);
// 
// h/w how to do sort in descending order......
// 
// console.log(arr.indexOf(9)); // for sort method....



// foreach ............



// let arr = [10,20,30]
// console.log("length:" , length);

//traditional loop we can use both method written below

// for(let index = 0; index < length; index++) {
    // console.log(arr[index]);
// }

// arr.forEach((value,index)=>{
    // console.log("Number: ", value, "index:", index);
// })







// forin.............







//   let obj = {
    //   name: "Love",
    //  age: 25,
    //   weight: 85,
        // greet: function(){
            // console.log("hello jee kaise ho saare");

        // }
    // 
//  };

// for (let key in obj) {
    // console.log(key," ",obj[key]);
// }




// for of..............



// let arr = [10,20,30];
// 
// for(let value of arr) {
    // console.log(value);
// 
// }




//Arrays with function ................


let arr = [10,20,30,40,50];

function getSum(arr) {
    let len = arr.length;
    let sum = 0;
    for(let index=0; index<len; index++){
        sum = sum + arr[index];
    }
    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);