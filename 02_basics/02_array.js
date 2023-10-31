const marvel_heros = ["Thor", "Hulk", "Ironman"]
const dc_heros = ["Spiderman", "Batman", "Superman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][2])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);

const anotherArray = [1,2,3,4,[5,6,],7,[6,8,[4,3]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("Manish"));
console.log(Array.from("Manish"));
console.log(Array.from({name:"Manish"})); // interseting 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
