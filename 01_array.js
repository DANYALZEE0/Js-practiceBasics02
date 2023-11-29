// array

const myArr = [1,2,3,4,5,6];
const myHeros = ["IronMan","Hulk","Captain America","BalckWido"]

const myArr2 = new Array(1,2,3,4,5,6)
// console.log(myArr[0]);

// Array Mentod
 // we can add the element in array
 
 
// myArr.push(6)
// myArr.push(7)
// myArr.pop(7)

// myArr.unshift(9)
// myArr.shift(9)

// console.log(myArr.includes(9)); // in boolean
// console.log(myArr.indexOf(9));
// // both methods are same output are different


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// console.log(myArr);

// slice, splice

console.log("A ", myArr);


const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);;
console.log(myn2);
