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


// Used W3 schools: https://www.w3docs.com/snippets/javascript/how-to-convert-string-to-title-case-with-javascript.html
// This function uses the map method twice: 1) to iterate through each string in the array and 2) to iterate through each word of each string
// The inner map takes split up string (using the split method) and capitalizes the first letter and then concats with the rest of the word using the slice method
// The outer map iterates through the new arrays of split up, capitalized words and joins them back together
const titleCased = () => {
  return tutorials.map((tutorial) => {
    return tutorial.split(' ').map((word) => {
        return (word[0].toUpperCase() + word.slice(1))
    }).join(' ')
  })
}

// console.log(titleCased())

// console.log(tutorials[0][0].toUpperCase())