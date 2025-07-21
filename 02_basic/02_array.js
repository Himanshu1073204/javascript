const marvel = ["thor", "Ironman", "Spiderman"]
const Dc =["superman", "flash", "batman"]

//marvel.push(Dc)

// console.log(marvel);
// console.log(marvel[3][1]);


// const all_hero = marvel.concat(Dc) // merge two aray
// console.log(all_hero);

const all_hero = [...marvel, ...Dc] // marge two array

// console.log(all_hero);

const another_array = [1, 2, 3, 4, [1, 6, 7], [6, 9, [4, 1]]]

const real_array =  another_array.flat(Infinity)
console.log(real_array);



console.log(Array.isArray("Hitesh")); // asking if this is array or not  
console.log(Array.from("Hitesh"));     // give it as array
console.log(Array.from({name: "hitesh"}));  // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
