const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)   
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]//spread method     

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//we can write 1/2/3 at position of infinity it is depth of an array

console.log(real_another_array);// flat is used for dividing array in parts if there is an array inside the array 



console.log(Array.isArray("garv"))
console.log(Array.from("garv"))
console.log(Array.from({name: "garv"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));