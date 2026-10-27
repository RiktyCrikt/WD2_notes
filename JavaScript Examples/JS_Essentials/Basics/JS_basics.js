// function snail() {
//   console.log("Hello Snail! 🐌🐌");
// }

// snail();

// setTimeout(snail, 2000);

// // A named, anonymous function: Attach functions to objects!
// let sail = function () {
//   console.log("Hello Sail ⛵");
// };

// used the variable here
// sail();
// setTimeout(sail, 3000);

// used anonymous function in arguments
// setTimeout(function () {
//   console.log("Hello World");
// }, 1500);

/**
 * Anonymous functions are used when you do not need to use a function multiple times
 * i.e. an onClick (Literally just for the button, no other use!)
 */
// Creating an object
// myObject = {myfnc: function() {console.log("Hello JS Object Function")}};
// myObject.myfnc();

/**
 * Arrow Functions:
 * => removes the keyword "function"
 * Sometimes called a "fat arrow" because other languages have a stabby (skinny) arrow (->)
 * 
 * Known as "Syntactic sugar"
 *  - Makes the language sweeter to look at!
 */

// let fail = function() {console.log("Hello Fail! ❌") };
// fail();

// let gail = () => {console.log("Hello Gail 👧")};
// gail();
/*===============================================================================================
/**
 * Explicit return functions:
 */
let explicit = (word, emoji) => {
  return `Hello ${word}! ${emoji}`;
}
console.log(explicit('seal','🦭'));

/**
 * Using String interpolation:
 *  - Using backticks
 *  - Removes the need for concatentation
*/

/**Implicit Returns 
 *  - Removes start/stop braces
 *  - Removes the "return" keyword
 *  - SINGLE LINE return functions only!
*/

let implicit = (word, emoji) =>  `Hello ${word}! ${emoji}`;
console.log(implicit('officer', '👮'));

/*=============================================================================== */
/**
 * Unadorned Functions:
 * 
 * Unadorned:
 *  - Removes need for parentheses
 *  - For SINGLE PARAMETER functions only
 */
let unadorned = emoji => `Hello Scale! ${emoji}`;
console.log(unadorned('⚖️'));