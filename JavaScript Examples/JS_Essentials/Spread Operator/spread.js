/** Spread Operator
 *  - Used infront of an array
 *  - Expand array, and turn each piece into a CSV
 *  - Useful when a function takes in a bunch of values, but not an array directly
 */

// Without spread:
// console.log(Math.max(42,56,102,12,15));

// with spread:
// const numbers = [42,56,102,12,15];
// console.log(Math.max(...numbers));

/** Can also use spread for string concatenation */

// litanyStart = ['Fear', 'is', 'the'];
// litanyEnd = ['mind', 'killer'];

// const litanyFull = [...litanyStart, ...litanyEnd];
// console.log(litanyFull);

/** Can also spread between literal values */
// const middle = ['is', 'the'];
// const litany = ['Fear', ...middle, ...litanyEnd, '(new version)'];
// console.log(litany);

/** Destructure and Spread */
// const sentence = ['this', 'is','the', 'house', '🦆', 'built'];
// const [first, second, ...theRest] = sentence;
// console.log(first, second, theRest);

/** Now using key-value pairs 
 *  - Using spread to combine into a single user
*/
// const someUser = {fullName: 'Wally Glutton', age: 42};
// const moreUser = {userName: 'stungeye', friend: 'Daisy'};

// const userFull = { ...someUser, ...moreUser};
// console.log(userFull);

/** Very last thing will always overwrite previous versions 
 *  of itself
 */
// let book = {name: 'Anthem', quote: 'Boredom is a mask frustration wears.'};
// book = {...book, author: 'Neal Stephenson', quote: 'Topology is destiny.'};
// console.log(book);

/**  */
function sayGoodnight(...names) {
    const namesList = names.join(', ');
    console.log(`Good night ${namesList}!`);
}
sayGoodnight('Wally', 'Daisy', 'Sammy', "June")
