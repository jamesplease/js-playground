// Consider the following method...
var addTwo = function(num) {
  return num + 2;
};
// console.log('Adding two:', addTwo(4));

// With arrow functions, we can rewrite this
// to be a single line.
var addTwoSimple = num => num + 2;
// console.log('Also adding two:', addTwo(4));

// For multiline methods, you'll need to add brackets and a `return` statement.
var addTwoMultiline = num => {
  num = num + 2;
  return num;
};
// console.log('Adding two multiline', addTwoMultiline(4));

// If you have more than one argument, you'll need parantheses. In this
// example, we set a default value for the precision
var setNumberPrecision = (num, precision = 2) => num.toFixed(precision);
// console.log('Precision:', setNumberPrecision(4));

// Default params also work for single-argument methods, but you'll need to
// add the parentheses.
var increaseByTwo = (num = 2) => num + 2;
// console.log('Increase by two:', increaseByTwo());

// ------------------------------------------------------------------------------------------------

// All of this is fine and good, but these are *particularly* awesome
// when doing functional-style programming.

var names = ['James', 'Sue', 'Sam'];
var lowercaseNames = names.map(name => name.toLowerCase());
// console.log('Lowercase names', lowercaseNames);