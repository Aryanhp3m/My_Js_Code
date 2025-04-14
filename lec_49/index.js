// Object daynamic in nature

// let obj = {
//     age : 12,
//     wt : 68,
//     ht : 180
// };

// console.log(obj)

// obj.color = "white";

// console.log(obj)


// object cloning.....

// 1) spread operator......


// let src = {
//     age:12,
//     wt:68,
//     ht:180
// };

// let dest = { ...src};

// console.log("src: ", src);
// console.log("dest: ", dest);


// 2) assign method .......

// let src = {
//     age:12,
//     wt:68,
//     ht:180
// };

// let src2 = {
//     value:101,
//     name: "Love babbar"
// }

// let dest = Object.assign({}, src, src2);

// console.log("src: ", src);
// console.log("dest: ", dest);


// 3) iteration method........



let src = {
    age:12,
    wt:68,
    ht:180
};

let dest = {};

for(let key in src) {
    let newKey = key;
    let newValue = src[key];
    // insert newKey and value in dest and create a clone
    dest[newKey] = newValue;
}

 console.log("src: ", src);
 console.log("dest: ", dest);