const marvel_Heros = ["thor","ironman","spiderman"]
const Dc_Heros = ["superman","flash","batman"]

// marvel_Heros.push(Dc_Heros)

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);


/*PS C:\Users\Zeeshan patel\OneDrive\Desktop\JSHC> node 02_basics/02_array2.js
[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
PS C:\Users\Zeeshan patel\OneDrive\Desktop\JSHC> node 02_basics/02_array2.js
[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
flash
PS C:\Users\Zeeshan patel\OneDrive\Desktop\JSHC> */

const AllinOne = marvel_Heros.concat(Dc_Heros)
// console.log(AllinOne);

const All_new_heros = [...marvel_Heros, ...Dc_Heros]
// console.log(All_new_heros);

const Arr_arr = [1,2,3, [4,5,6],7,[8,9,[7,8,6]]] 
const real_array = Arr_arr.flat(Infinity)
// console.log(real_array);

// console.log(Array.isArray("Zeeshan"))
// console.log(Array.from("Zeeshan"));
// console.log(Array.from({name: "Zeeshan"})); // Intresting

let score1 = 4500
let score2 = 4500666
let score3 = 450066

console.log(Array.of(score1, score2,score3));


