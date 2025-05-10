const marvel_heroes = ["ironman", "thor", "spiderman"]
const dc_heroes = ["superman", "flashman", "batman"]


// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

const newHero = marvel_heroes.concat(dc_heroes)
// console.log(newHero);

const allHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(allHeroes)

const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realArr = newArr.flat(Infinity)
// console.log(realArr)


console.log(Array.isArray("Soddarth"));
console.log(Array.from("Soddarth"));
console.log(Array.from({name:"Soddarth"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))