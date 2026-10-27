let fruitBasket = [" 🍒 ", " 🍇 ", " 🍉 ", " 🍊 "];

/* Classic For Loop */
// for (let i = 0; i < fruitBasket.length; i++) {
//   console.log(fruitBasket[i]);
// }

/* for loop with OF... */
// for( const fruit of fruitBasket ) {
//     console.log(fruit);
// }

/** forEach
 *  - A call back base loop
 *  - Single line, unadorned arrow function w/ 1 param
 * */ 
// fruitBasket.forEach(fruit => console.log(fruit));

/* Complex forEach example:
    - using forEach to get the index value out 
 */
fruitBasket.forEach((fruit, i) => {
    let length = fruitBasket.length;
    let row = ' '.repeat(length-i) + fruit.repeat(i+1);
    console.log(row);
});

