const hearts = ["🖤", "❤️", "💛"];

/** Destructuring:
 *  - Assigning multiple variables at the same time on one line of code
 *  - Useful when there are values we want to name incoming from data
 *  - If don't need a certain position, leave it blank
 *      - i.e. [black, , yellow] = hearts;
 * */
// const [black, red, yellow] = hearts;
// console.log(black, red, yellow);

/** Taking in an array indirectly... */
// function weather() { return [10,15,22]};
// const [low, high , average] = weather();
// console.log(low,high, average);

/** Now with key-value pairs instead of array indexes */
const adventures = { mountain: "⛰️", city: "🏗️", desert: "🏜️" };
// const {mountain, desert} = adventures;
// console.log(mountain, desert);

/** Renaming the variables */
// const {city: NYC, mountain: everest, desert: sahara} = adventures;
// console.log(NYC);

/** We can map just one item from the collection to a variable
 *  - Do not need to continue with spaces/commas when you are done mapping already
 */
const animalFriends = [
  { name: "Monkey", emoji: "🐵" },
  { name: "Dog", emoji: "🐶" },
  { name: "Cow", emoji: "🐮" },
];
// const [, { emoji: dogEmoji }] = animalFriends;
// console.log(dogEmoji);

const apiResponse = {
  title: "JS Environment",
  translations: [
    {
      locale: "de - Germany",
      last_edit: "2014-01-15T08:43:37",
      title: "JS Umgebung",
    },
  ],
};

let {
  title: englishTitle,
  translations: [{ title: germanTitle }],
} = apiResponse;

console.log(`English Title:${englishTitle}\nGerman Title: ${germanTitle}`);