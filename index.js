const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = ()=> {
  return tutorials.map(titleCaseString);
}

const titleCaseString = (string) => {
  debugger
  let strArray = string.split(' ');
  let capWords = strArray.map((word) =>{
    return word.charAt(0).toUpperCase() + word.slice(1);
      })
let newString = capWords.join(' ');
return newString;
};
















//********************************************************
// function getTitleCase (string){
//   const titleCased = string.split(' ').map((word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//      }))
//     .join(' ');

//   return titleCased;
// }

// console.log(getTitleCase)


// // 👇️ Hello World
// console.log(getTitleCase('hello world'));

// // 👇️ Hello World
// console.log(getTitleCase('hello      world'));

// // 👇️ ''
// console.log(getTitleCase(''));


//********************************************************

// function capitalize(string) {
//   return str.charAt(0).toUpperCase() + string.slice(1);
// }
// const caps = str.split(' ').map(capitalize).join(' ');
// caps; 

//********************************************************
// for (var i = 0; i < str.length; i++) {
//   console.log(str.charAt(i));
// }
// return str.split(' ').map(item => item.join(' '));
//********************************************************
// const str = 'i have learned something new today';
// const arr = str.split(" ");

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }

// const str2 = arr.join(" ");
// console.log(str2);
//return//I Have Learned Something New Today
//********************************************************






// - `titleCased()`: returns an array with title case tutorial names. Note that
//   this function takes no arguments and should use the global `tutorials`
//   variable as data.

// **NOTE:** This lab is challenging! You will need to iterate through the
// `tutorials` array, modifying the name of each tutorial. To do this, you will
// **also** need to access and modify each individual word.

// Some questions to consider:

// - How can we "iterate" through individual words in a string?
// - Can we execute an iteration inside an iteration? How?
// - How can we capitalize just the first letter in a word?

// A couple of hints:

// - Break the task into smaller chunks: using the console or a REPL, start by
//   figuring out how to modify one individual element in the `tutorials` array.
//   Once you've got that working, then figure out how to update the array itself.
// - Use Google!!

// ## Conclusion

// `map()` takes 2 arguments — a callback and the optional context. The callback is
// called for each value in the original array and the modified value is added to a
// new array. Its return value is a new array that is the same length as the
// original array. Using `map()` saves time while making the code simpler and more
// expressive.
