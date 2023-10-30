const name = "Manish"
const repoCount = 30

// console.log(name + repoCount + " value");

// console.log(`My name is ${name} and my total repogotry is ${repoCount}`);

const gameName = new String('Game-Zone')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "    Manish       "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://www.manish.com/manish%20mahapatra"
console.log(url.replace('%20', '-'));

console.log(url.includes('rashmi'))

console.log(gameName.split('-'));