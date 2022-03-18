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

// no arguments, uses global tutorials array
// returns new array with proper title casing
function titleCased(){
  // store results of mapped tutorials array and return
  const titleCasedTutorials = tutorials.map(titleCasedHelper);

  return titleCasedTutorials;
};

// cb function that handles title casing logic
function titleCasedHelper(element){
  // split full title into array of individual words
  const splitIntoWords = element.split(" ");

  // iterate over words
  for(let i=0; i<splitIntoWords.length; i++){
    // uppercase only the first letter of the word
    // then add in the rest of the word with slice
    splitIntoWords[i] = splitIntoWords[i].charAt(0).toUpperCase() + splitIntoWords[i].slice(1);

    // at the end of the title
    if(i === splitIntoWords.length - 1){
      // join words back into a single sentence
      let result = splitIntoWords.join(" ");

      return result;
    }
  }
};