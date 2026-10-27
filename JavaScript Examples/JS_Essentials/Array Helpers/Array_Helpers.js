const animals = [
    {name: 'Monkey', emoji:'🐒', legs: 2, mana: 45, count: 3 },
    {name: 'Dog', emoji:'🐕', legs: 4, mana: 89, count: 2 },
    {name: 'Cow', emoji:'🐮', legs: 4, mana: 56, count: 5 },
    {name: 'Dragon', emoji:'🐲', legs: 4, mana: 9001, count: 1 },
    {name: 'Deer', emoji:'🦌', legs: 4, mana: 98, count: 18 },
    {name: 'Kangaroo', emoji:'🦘', legs: 2, mana: 49, count: 6 },
    {name: 'Turkey', emoji:'🦃', legs: 2, mana: 17, count: 7 },
];

// console.log(animals[3]);
// console.log(animals[3].name);

/** .map
 *  - Takes in a collection
 *  - Makes a new collection of the same size, but modified in some way!
 */

// const emojiZoo = animals.map(animal => animal.emoji.repeat(animal.count));
// // Equivalent to: animals.map(function(animal) { return animal.emoji.repeat(animal.count)}); 
// console.log(emojiZoo);

/** .filter: 
 *  - Filtering an array based on a boolean expression
*/
// const fourLegs = animals.filter(animal => animal.legs == 4);
// console.log(fourLegs);

/** .find
 *  - Useful when finding a single value in collection
 *  - Only returns the first one that matches
 */

// const cow = animals.find(animal => animal.name == 'Cow');
// console.log(cow);

/** .includes
 *  - See if there is at least one in collection
 */

// if(animals.map(animal => animal.name).includes('Dragon')) {
//     console.log("THERE BE DRAGONS HERE!");
// }

/** .some
 *  - TRUE or FALSE expression
 *  - TRUE:
 *      - Boolean expression is true
 *  - FALSE:
 *      - Boolean expression if false
 * 
 * .every
 *  - Similar, but every entry in collection must pass to be true
 */

// mana needed to participate in rap battle
// const manaNeededToBattle = 40;
// if(animals.some(animal => animal.mana >= manaNeededToBattle)) {
//     console.log("WE ARE READY!");
// } else {
//     console.log("NOOOOOO!");
// }

// if(animals.every(animal => animal.mana >= manaNeededToBattle)) {
//     console.log("WE ARE READY!");
// } else {
//     console.log("NOOOOOO!");
// }

/** .reduce
 *  - accumulation/sum across an entire set of data
 */
console.log(animals.reduce((total, animal) => total + animal.count, 0));